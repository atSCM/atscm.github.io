!function(){"use strict";const e=1599546790666,t="cache"+e,c=["/client/e.client.256cbca8.js","/client/c.[manual].42b53c6e.js","/client/c.from-cli.26a78b71.js","/client/c.index.975e29c4.js","/client/c.index.8cb79d01.js","/client/c._layout.52165f04.js","/client/c.index.a087775e.js","/client/c._layout.d954e13b.js","/client/c.index.399bad50.js","/client/c.client.67a8de4e.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}}))))})}();
