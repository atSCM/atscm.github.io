!function(){"use strict";const e=1605852486451,t="cache"+e,c=["/client/e.client.c5ae5501.js","/client/c.index.2c88e002.js","/client/c.index.aee84dc2.js","/client/c.[manual].b09f5a40.js","/client/c.from-cli.f64faf89.js","/client/c.index.5ae421d2.js","/client/c._layout.f1df0f99.js","/client/c._layout.f9d925ef.js","/client/c.index.75f335a1.js","/client/c.client.7529f3af.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}}))))})}();
