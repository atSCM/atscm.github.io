!function(){"use strict";const e=["client/e.client.62820723.js","client/c.[manual].024677fa.js","client/c.from-cli.908c859a.js","client/c.index.a53e567b.js","client/c.index.9cf982bb.js","client/c.index.c39e9c13.js","client/c._layout.b8c28f6e.js","client/c._layout.2ca09b03.js","client/c.SEO.e0f3a876.js","client/c.index.6ff7510c.js","client/c.app.2542dfc9.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1575765245784").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1575765245784"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1575765245784").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
