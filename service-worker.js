!function(){"use strict";const e=1598688888743,t="cache"+e,c=["/client/e.client.fc034316.js","/client/c.from-cli.06df02b8.js","/client/c.index.6d498d9f.js","/client/c.index.3581c705.js","/client/c._layout.8355bf78.js","/client/c.[manual].f3a57139.js","/client/c.index.55b4f056.js","/client/c._layout.1fa6a825.js","/client/c.index.c209c308.js","/client/c.client.0d283af8.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}}))))})}();
