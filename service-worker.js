!function(){"use strict";const e=["client/e.client.b06cfeeb.js","client/c.[manual].abe919dd.js","client/c.index.45fdb543.js","client/c.from-cli.9ea76578.js","client/c.index.2e9d049d.js","client/c.index.6faa5326.js","client/c._layout.006b7469.js","client/c._layout.3fb34719.js","client/c.index.3b5b3dc6.js","client/c.client.f8746a45.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1595101121398").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1595101121398"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595101121398").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
