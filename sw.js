self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tier-app").then(cache => {
      return cache.addAll(["index.html"]);
    })
  );
});
