//console.log('sw.js clocking in');

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('stativ-v1').then(cache => {
			return cache.addAll([
				'/pwa/',
				'/pwa/index.html'
			]);
		})
	)
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(res => {
			if (res) return res;
			return fetch(event.request)
		})
	);
});