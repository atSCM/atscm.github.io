!function(){"use strict";const e=["client/e.client.2ab393c6.js","client/c.[manual].024677fa.js","client/c.index.9cf982bb.js","client/c.from-cli.b63a08ef.js","client/c.index.3a8d8bbd.js","client/c.index.ebe35ac8.js","client/c._layout.e9be0ac3.js","client/c._layout.2e00a6d3.js","client/c.SEO.e0f3a876.js","client/c.index.614fae2b.js","client/c.app.9e8db309.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1575991308231").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1575991308231"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1575991308231").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
