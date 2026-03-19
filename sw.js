const CACHE_NAME = "mi-app-v1";

// Archivos básicos
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./icono.png",
  "./icono-512.png"
];

// 🔧 INSTALAR
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 🔧 ACTIVAR
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// 🔥 FETCH (LA CLAVE)
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guarda lo nuevo automáticamente
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Si no hay internet → usa cache
        return caches.match(event.request);
      })
  );
});