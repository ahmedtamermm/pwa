self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("my-cache").then((cache) => {
            return cache.addAll(["/", "/index.html", "/page2.html", "/main.js"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
