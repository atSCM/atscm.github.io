import{S as s,i as t,s as l,e as n,t as e,b as c,g as a,h as o,j as r,k as i,f as h,l as f,G as u,o as p,p as m,C as $,F as g,q as d,w as v,x as E,D as I,c as D,d as x,n as j,E as L,r as V,u as w,v as A}from"./c.client.63b616e9.js";function S(s,t,l){const n=s.slice();return n[9]=t[l],n}function b(s,t,l){const n=s.slice();return n[6]=t[l],n[8]=l,n}function y(s){let t,l=s[6].sections,e=[];for(let t=0;t<l.length;t+=1)e[t]=C(S(s,l,t));return{c(){t=n("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=a(s,"UL",{class:!0});var l=o(t);for(let s=0;s<e.length;s+=1)e[s].l(l);l.forEach(i),this.h()},h(){f(t,"class","menu-list")},m(s,l){p(s,t,l);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(s,n){if(17&n){let c;for(l=s[6].sections,c=0;c<l.length;c+=1){const a=S(s,l,c);e[c]?e[c].p(a,n):(e[c]=C(a),e[c].c(),e[c].m(t,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=l.length}},d(s){s&&i(t),g(e,s)}}}function C(s){let t,l,u,g,d,v=s[9].title+"";return{c(){t=n("li"),l=n("a"),u=e(v),d=c(),this.h()},l(s){t=a(s,"LI",{});var n=o(t);l=a(n,"A",{href:!0});var e=o(l);u=r(e,v),e.forEach(i),d=h(n),n.forEach(i),this.h()},h(){f(l,"href",g=s[4](s[6],s[9]))},m(s,n){p(s,t,n),m(t,l),m(l,u),m(t,d)},p(s,t){1&t&&v!==(v=s[9].title+"")&&$(u,v),1&t&&g!==(g=s[4](s[6],s[9]))&&f(l,"href",g)},d(s){s&&i(t)}}}function U(s){let t,l,g,d,v,E,I=s[6].title+"",D=s[1][s[8]]&&s[6].sections.length&&y(s);return{c(){t=n("li"),l=n("a"),g=e(I),v=c(),D&&D.c(),E=c(),this.h()},l(s){t=a(s,"LI",{});var n=o(t);l=a(n,"A",{href:!0});var e=o(l);g=r(e,I),e.forEach(i),v=h(n),D&&D.l(n),E=h(n),n.forEach(i),this.h()},h(){f(l,"href",d=s[4](s[6])),u(l,"is-active",s[3](s[6]))},m(s,n){p(s,t,n),m(t,l),m(l,g),m(t,v),D&&D.m(t,null),m(t,E)},p(s,n){1&n&&I!==(I=s[6].title+"")&&$(g,I),1&n&&d!==(d=s[4](s[6]))&&f(l,"href",d),9&n&&u(l,"is-active",s[3](s[6])),s[1][s[8]]&&s[6].sections.length?D?D.p(s,n):(D=y(s),D.c(),D.m(t,E)):D&&(D.d(1),D=null)},d(s){s&&i(t),D&&D.d()}}}function k(s){let t,l,e=s[0],c=[];for(let t=0;t<e.length;t+=1)c[t]=U(b(s,e,t));return{c(){t=n("aside"),l=n("ul");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){t=a(s,"ASIDE",{class:!0});var n=o(t);l=a(n,"UL",{class:!0});var e=o(l);for(let s=0;s<c.length;s+=1)c[s].l(e);e.forEach(i),n.forEach(i),this.h()},h(){f(l,"class","menu-list"),f(t,"class","menu")},m(s,n){p(s,t,n),m(t,l);for(let s=0;s<c.length;s+=1)c[s].m(l,null)},p(s,[t]){if(27&t){let n;for(e=s[0],n=0;n<e.length;n+=1){const a=b(s,e,n);c[n]?c[n].p(a,t):(c[n]=U(a),c[n].c(),c[n].m(l,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=e.length}},i:d,o:d,d(s){s&&i(t),g(c,s)}}}function q(s,t,l){let n,{topics:e}=t;const{page:c}=v();E(s,c,s=>l(5,n=s));const a=s=>n.params.manual===s.slug;let o;return s.$$set=s=>{"topics"in s&&l(0,e=s.topics)},s.$$.update=()=>{1&s.$$.dirty&&l(1,o=e.map(s=>a(s)))},[e,o,c,a,(s,t)=>`${n.params.version}/docs/${s.slug}${t?"/#"+t.slug:""}`]}class F extends s{constructor(s){super(),t(this,s,q,k,l,{topics:0})}}function G(s){let t,l,e,r,u,$,g,d;const v=s[2].default,E=I(v,s,s[1],null);return g=new F({props:{topics:s[0]}}),{c(){t=n("section"),l=n("div"),e=n("div"),r=n("div"),E&&E.c(),u=c(),$=n("div"),D(g.$$.fragment),this.h()},l(s){t=a(s,"SECTION",{class:!0});var n=o(t);l=a(n,"DIV",{class:!0});var c=o(l);e=a(c,"DIV",{class:!0});var f=o(e);r=a(f,"DIV",{class:!0});var p=o(r);E&&E.l(p),p.forEach(i),u=h(f),$=a(f,"DIV",{class:!0});var m=o($);x(g.$$.fragment,m),m.forEach(i),f.forEach(i),c.forEach(i),n.forEach(i),this.h()},h(){f(r,"class","column"),f($,"class","column is-3"),f(e,"class","columns"),f(l,"class","container"),f(t,"class","section")},m(s,n){p(s,t,n),m(t,l),m(l,e),m(e,r),E&&E.m(r,null),m(e,u),m(e,$),j(g,$,null),d=!0},p(s,[t]){E&&E.p&&2&t&&L(E,v,s,s[1],t,null,null);const l={};1&t&&(l.topics=s[0]),g.$set(l)},i(s){d||(V(E,s),V(g.$$.fragment,s),d=!0)},o(s){w(E,s),w(g.$$.fragment,s),d=!1},d(s){s&&i(t),E&&E.d(s),A(g)}}}async function N({params:{version:s}}){return{topics:await this.fetch(s+"/docs/toc.json").then(s=>s.json())}}function O(s,t,l){let{topics:n}=t,{$$slots:e={},$$scope:c}=t;return s.$$set=s=>{"topics"in s&&l(0,n=s.topics),"$$scope"in s&&l(1,c=s.$$scope)},[n,c,e]}export default class extends s{constructor(s){super(),t(this,s,O,G,l,{topics:0})}}export{N as preload};
