// Старый cache-first service worker кэшировал JS-чанки навсегда и ломал
// приложение после обновлений (две версии React → белый экран).
// Снимаем регистрацию и чистим кэши, чтобы вылечить уже установленный SW.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then((regs) => regs.forEach((r) => r.unregister()))
    .catch(() => {});
}
if (window.caches && caches.keys) {
  caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
}
