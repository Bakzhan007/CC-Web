// Само-удаляющийся service worker.
// Прежний cache-first SW кэшировал JS-чанки навсегда и ломал приложение
// после обновлений. Этот воркер очищает все кэши и снимает сам себя с регистрации.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.clients.claim();
    await self.registration.unregister();
    // Перезагружаем открытые вкладки, чтобы они работали уже без SW
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});

// Без обработчика fetch — все запросы идут напрямую в сеть.
