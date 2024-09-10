
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("TodoifyEz").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/script.js",
                "/src/assets/icons/logo.png"
            ]);
        })
    );
});


self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});