!function(){"use strict";const e=1613110262569,t="cache"+e,c=["/client/e.client.c0d8378d.js","/client/c.[manual].7069e0eb.js","/client/c.index.128704f8.js","/client/c._layout.93ab6029.js","/client/c.index.c6fb1306.js","/client/c.index.a45112b4.js","/client/c.from-cli.bac8ab85.js","/client/c._layout.85002dbc.js","/client/c.index.42ccc2fb.js","/client/c.client.88a33de3.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}}))))})}();
