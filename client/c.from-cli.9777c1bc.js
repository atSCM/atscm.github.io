import{S as s,i as a,s as t,a as e,c as r,b as o,e as n,t as c,d as i,f as l,g as h,h as d,j as f,k as u,l as v,n as p,o as g,p as m,q as $,r as b,u as E,v as w,w as y,x as k,y as x,z as I,A as T}from"./c.client.7a64abab.js";function q(s){let a,t,y,k,x,I,T,q,D,N,R,S,V,j;const A=new e({props:{title:"Redirecting...",description:"This should only take a few seconds"}});return{c(){r(A.$$.fragment),a=o(),t=n("section"),y=n("div"),k=n("div"),x=n("h1"),I=c("Redirecting..."),T=o(),q=n("p"),D=c("This should only take a few seconds"),N=o(),R=n("div"),S=n("a"),V=c("Jump to latests docs"),this.h()},l(s){i(A.$$.fragment,s),a=l(s),t=h(s,"SECTION",{class:!0});var e=d(t);y=h(e,"DIV",{class:!0});var r=d(y);k=h(r,"DIV",{class:!0});var o=d(k);x=h(o,"H1",{class:!0});var n=d(x);I=f(n,"Redirecting..."),n.forEach(u),T=l(o),q=h(o,"P",{class:!0});var c=d(q);D=f(c,"This should only take a few seconds"),c.forEach(u),N=l(o),R=h(o,"DIV",{class:!0});var v=d(R);S=h(v,"A",{href:!0,class:!0});var p=d(S);V=f(p,"Jump to latests docs"),p.forEach(u),v.forEach(u),o.forEach(u),r.forEach(u),e.forEach(u),this.h()},h(){v(x,"class","title"),v(q,"class","subtitle"),v(S,"href","latest"),v(S,"class","button is-link"),v(R,"class","buttons is-centered"),v(k,"class","container has-text-centered"),v(y,"class","hero-body"),v(t,"class","hero is-fullheight-with-navbar")},m(s,e){p(A,s,e),g(s,a,e),g(s,t,e),m(t,y),m(y,k),m(k,x),m(x,I),m(k,T),m(k,q),m(q,D),m(k,N),m(k,R),m(R,S),m(S,V),j=!0},p:$,i(s){j||(b(A.$$.fragment,s),j=!0)},o(s){E(A.$$.fragment,s),j=!1},d(s){w(A,s),s&&u(a),s&&u(t)}}}function D(s){const[,a]=s.match(/^(.*)\.[0-9]+/)||[];return a||null}function N(s,a,t){let e;const{page:r}=y();k(s,r,s=>t(1,e=s));const{tags:o}=x("index");return I(()=>{const{version:s}=e.query;function a(a){const t=a.version===s;let e=`/${a.tag||"latest"}/`;t||(e+=`?requested=${s||"none"}`),T(e,{replaceState:t})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});let t,r=s;do{t=o.find(s=>s.version.startsWith(r))}while(!t&&(r=D(r)));return t?a(t):(console.error(`No match for ${s}, redirect to latest`),a({version:"invalid"}))}),[r]}export default class extends s{constructor(s){super(),a(this,s,N,q,t,{})}}
