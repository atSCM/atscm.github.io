import{B as s,S as a,i as e,s as t,a as n,e as r,t as l,b as c,g as o,h as i,j as h,k as f,f as m,l as d,o as u,p as g,C as v,c as p,d as E,n as $,r as I,u as w,v as D,F as L,w as V,x as j}from"./c.client.ede2ac5d.js";function x(s,a,e){const t=s.slice();return t[3]=a[e],t}function b(s){let a,e,t,n,p,E=s[3].title+"";return{c(){a=r("li"),e=r("a"),t=l(E),p=c(),this.h()},l(s){a=o(s,"LI",{});var n=i(a);e=o(n,"A",{href:!0});var r=i(e);t=h(r,E),r.forEach(f),p=m(n),n.forEach(f),this.h()},h(){d(e,"href",n=s[1].path+"#"+s[3].slug)},m(s,n){u(s,a,n),g(a,e),g(e,t),g(a,p)},p(s,a){1&a&&E!==(E=s[3].title+"")&&v(t,E),3&a&&n!==(n=s[1].path+"#"+s[3].slug)&&d(e,"href",n)},d(s){s&&f(a)}}}function A(s){let a,e,t,V,j,A,M,k,H,S,T,U,y,B,C,F=s[0].content+"",N=s[0].title+"";a=new n({props:{title:"Readme",description:"Learn how to get started with atscm"}});let P=s[0].sections,R=[];for(let a=0;a<P.length;a+=1)R[a]=b(x(s,P,a));return{c(){p(a.$$.fragment),e=c(),t=r("div"),V=r("div"),j=r("div"),A=r("main"),M=r("div"),k=c(),H=r("div"),S=r("aside"),T=r("p"),U=l(N),y=c(),B=r("ul");for(let s=0;s<R.length;s+=1)R[s].c();this.h()},l(s){E(a.$$.fragment,s),e=m(s),t=o(s,"DIV",{class:!0});var n=i(t);V=o(n,"DIV",{class:!0});var r=i(V);j=o(r,"DIV",{class:!0});var l=i(j);A=o(l,"MAIN",{class:!0});var c=i(A);M=o(c,"DIV",{class:!0}),i(M).forEach(f),c.forEach(f),k=m(l),H=o(l,"DIV",{class:!0});var d=i(H);S=o(d,"ASIDE",{class:!0});var u=i(S);T=o(u,"P",{class:!0});var g=i(T);U=h(g,N),g.forEach(f),y=m(u),B=o(u,"UL",{class:!0});var v=i(B);for(let s=0;s<R.length;s+=1)R[s].l(v);v.forEach(f),u.forEach(f),d.forEach(f),l.forEach(f),r.forEach(f),n.forEach(f),this.h()},h(){d(M,"class","content"),d(A,"class","column"),d(T,"class","menu-label"),d(B,"class","menu-list"),d(S,"class","menu"),d(H,"class","column is-3 is-hidden-mobile"),d(j,"class","columns"),d(V,"class","container"),d(t,"class","section")},m(s,n){$(a,s,n),u(s,e,n),u(s,t,n),g(t,V),g(V,j),g(j,A),g(A,M),M.innerHTML=F,g(j,k),g(j,H),g(H,S),g(S,T),g(T,U),g(S,y),g(S,B);for(let s=0;s<R.length;s+=1)R[s].m(B,null);C=!0},p(s,[a]){if((!C||1&a)&&F!==(F=s[0].content+"")&&(M.innerHTML=F),(!C||1&a)&&N!==(N=s[0].title+"")&&v(U,N),3&a){let e;for(P=s[0].sections,e=0;e<P.length;e+=1){const t=x(s,P,e);R[e]?R[e].p(t,a):(R[e]=b(t),R[e].c(),R[e].m(B,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=P.length}},i(s){C||(I(a.$$.fragment,s),C=!0)},o(s){w(a.$$.fragment,s),C=!1},d(s){D(a,s),s&&f(e),s&&f(t),L(R,s)}}}async function M({params:{version:a}}){if(!s.find(({tag:s})=>s===a))return this.error(404,`Unknown release tag '${a}'`);return{readme:await this.fetch(a+"/readme.json").then(s=>s.json())}}function k(s,a,e){let t,{readme:n}=a;const{page:r}=V();return j(s,r,s=>e(1,t=s)),s.$set=s=>{"readme"in s&&e(0,n=s.readme)},[n,t,r]}export default class extends a{constructor(s){super(),e(this,s,k,A,t,{readme:0})}}export{M as preload};
