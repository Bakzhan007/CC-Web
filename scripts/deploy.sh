#!/usr/bin/env bash
# Деплой на hoster.kz по FTPS: сборка → загрузка → проверка.
# Настройки берутся из .env.deploy (не коммитится), пример — .env.deploy.example.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f .env.deploy ]; then
  echo "Нет .env.deploy. Скопируйте .env.deploy.example в .env.deploy и заполните доступы FTP."
  exit 1
fi
# shellcheck disable=SC1091
source .env.deploy
: "${FTP_HOST:?FTP_HOST не задан}" "${FTP_USER:?FTP_USER не задан}" "${FTP_PASS:?FTP_PASS не задан}"
REMOTE_DIR="${REMOTE_DIR:-public_html}"
SITE_URL="${SITE_URL:-https://caspiancoast.kz}"

command -v lftp >/dev/null || { echo "Нужен lftp: brew install lftp"; exit 1; }

echo "▶ Сборка…"
npm run build

echo "▶ Загрузка на $FTP_HOST:$REMOTE_DIR…"
# Порядок важен, чтобы посетители не поймали полусобранный сайт:
#  1) новые файлы /assets (старые пока остаются — открытые вкладки продолжают работать)
#  2) остальные файлы из dist, кроме index.html
#  3) index.html последним — с этого момента сайт переключается на новую версию
#  4) удаляем устаревшие файлы только внутри /assets (остальное в public_html не трогаем)
lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<LFTP
set ftp:ssl-allow yes
set ftp:ssl-force ${FTP_SSL_FORCE:-yes}
set ssl:verify-certificate ${FTP_VERIFY_CERT:-no}
set net:max-retries 3
set net:timeout 20
mkdir -pf $REMOTE_DIR/assets
mirror -R --parallel=4 --only-newer --no-perms dist/assets $REMOTE_DIR/assets
mirror -R --parallel=4 --no-perms --exclude-glob index.html --exclude-glob assets/ dist $REMOTE_DIR
put -O $REMOTE_DIR dist/index.html
mirror -R --delete --only-newer --no-perms dist/assets $REMOTE_DIR/assets
bye
LFTP

echo "▶ Проверка $SITE_URL…"
fail=0
for path in / /projects/taras /apartments /robots.txt /sitemap.xml; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL$path?deploy=$(date +%s)")
  printf "  %-18s %s\n" "$path" "$code"
  [ "$code" = "200" ] || fail=1
done
[ $fail -eq 0 ] && echo "✅ Готово" || { echo "⚠️  Есть ответы не 200 — проверьте .htaccess и SSL"; exit 1; }
