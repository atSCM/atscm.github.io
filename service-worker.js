!function(){"use strict";const e=1607932023658,t="cache"+e,n=["/client/e.client.1539faef.js","/client/c.[manual].6b413a0b.js","/client/c.from-cli.e964ebbd.js","/client/c.index.1a32f12a.js","/client/c.index.ee7d9931.js","/client/c._layout.d744e09b.js","/client/c.index.14e6aa81.js","/client/c._layout.7d6f410d.js","/client/c.index.23d2e892.js","/client/c.client.d4e6de17.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&c.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const c=await e.match(t.request);if(c)return c;throw n}}))))})}();
