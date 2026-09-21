// Service Worker برای آتش‌کاو
var CACHE_NAME = 'atashkav-v2';
var urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

// نصب
self.addEventListener('install', function(event) {
    console.log('🔧 Service Worker نصب شد');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

// فعال‌سازی
self.addEventListener('activate', function(event) {
    console.log('✅ Service Worker فعال شد');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// رهگیری درخواست‌ها
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request).then(function(response) {
                // کش کردن درخواست‌های موفق
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                var responseToCache = response.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        }).catch(function() {
            // آفلاین: برگرداندن صفحه اصلی
            return caches.match('./index.html');
        })
    );
});