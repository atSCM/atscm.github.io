!function(){"use strict";const e=1604447344960,t="cache"+e,c=["/client/e.client.e2636604.js","/client/c.[manual].441e3147.js","/client/c.index.ddfdb24b.js","/client/c.from-cli.cb286ade.js","/client/c.index.6de3c8de.js","/client/c.index.da1ca88c.js","/client/c._layout.cdb851ea.js","/client/c._layout.4a89d159.js","/client/c.index.fe0715b9.js","/client/c.client.2a749b7d.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}}))))})}();
