!function(){"use strict";const e=1613384575505,t="cache"+e,n=["/client/client.e9889130.js","/client/inject_styles.5607aec6.js","/client/index.2338f81a.js","/client/from-cli.3cf74c8b.js","/client/_layout.279501a4.js","/client/index.43e4df5c.js","/client/_layout.15b92265.js","/client/index.5612572b.js","/client/[manual].3458f912.js","/client/index.8dfda224.js"].concat(["/service-worker-index.html","/.nojekyll","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!s||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open("offline"+e);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())})}();
