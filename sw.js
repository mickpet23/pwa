let staticCacheName = 'expenses-static-v2'

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('staticCacheName').then(cache => {
			return cache.addAll([
				'/pwa/',
				'/pwa/index.html'
			]);
		})
	)
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.filter(cacheName => {
					return cacheName.startsWith('expenses-')&&
						cacheName != staticCacheName;
				}).map(cacheName => {
					return cache.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(res => {
			if (res) return res;
			return fetch(event.request)
		})
	);
});