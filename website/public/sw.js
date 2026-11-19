// Offline support: network-first for pages, cache-first for hashed static assets.
const CACHE = "devspeak-v1";
const PRECACHE = ["/", "/manifest.webmanifest", "/icons/icon-192x192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== location.origin) return;

  const isStatic = url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/");
  if (isStatic) {
    e.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
            return res;
          }),
      ),
    );
    return;
  }

  e.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      })
      .catch(() => caches.match(request).then((hit) => hit || caches.match("/"))),
  );
});
