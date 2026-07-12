// Service Worker untuk PWA Warung Teh Eha
const CACHE_NAME = 'warung-eha-v1';

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Terinstall');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Aktif');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Membiarkan semua request lewat (karena kita pakai Google Sheets dan LocalStorage)
    event.respondWith(fetch(event.request));
});
