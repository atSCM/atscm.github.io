import{S as s,i as t,s as e,D as l,e as n,g as a,h as r,k as c,l as i,o,E as h,r as f,I as u,J as m,K as d,u as p,b as g,f as v,p as $,L as E,M as b,N as k,O as I,t as x,j as D,C as P,G as w,F as A,P as L,Q as T,q as V,a as y,c as S,d as N,n as H,v as M,R as _,w as O,x as R,T as j}from"./c.client.9135a763.js";const q=s=>({open:2&s}),J=s=>({open:s[1]});function G(s){let t,e,g;const v=s[3].default,$=l(v,s,s[2],null);return{c(){t=n("div"),$&&$.c(),this.h()},l(s){t=a(s,"DIV",{class:!0});var e=r(t);$&&$.l(e),e.forEach(c),this.h()},h(){i(t,"class","details-content svelte-1p261ik")},m(s,e){o(s,t,e),$&&$.m(t,null),g=!0},p(s,t){$&&$.p&&4&t&&h($,v,s,s[2],t,null,null)},i(s){g||(f($,s),s&&u(()=>{e||(e=m(t,d,{},!0)),e.run(1)}),g=!0)},o(s){p($,s),s&&(e||(e=m(t,d,{},!1)),e.run(0)),g=!1},d(s){s&&c(t),$&&$.d(s),s&&e&&e.end()}}}function B(s){let t,e,u,m,d,w;const A=s[3].summary,L=l(A,s,s[2],J),T=L||function(s){let t;return{c(){t=x(s[0])},l(e){t=D(e,s[0])},m(s,e){o(s,t,e)},p(s,e){1&e&&P(t,s[0])},d(s){s&&c(t)}}}(s);let V=s[1]&&G(s);return{c(){t=n("div"),e=n("p"),T&&T.c(),u=g(),V&&V.c(),this.h()},l(s){t=a(s,"DIV",{class:!0});var l=r(t);e=a(l,"P",{class:!0});var n=r(e);T&&T.l(n),n.forEach(c),u=v(l),V&&V.l(l),l.forEach(c),this.h()},h(){i(e,"class","button summary"),i(t,"class","details")},m(l,n){o(l,t,n),$(t,e),T&&T.m(e,null),$(t,u),V&&V.m(t,null),m=!0,d||(w=E(e,"click",b(s[4])),d=!0)},p(s,[e]){L?L.p&&6&e&&h(L,A,s,s[2],e,q,J):T&&T.p&&1&e&&T.p(s,e),s[1]?V?(V.p(s,e),2&e&&f(V,1)):(V=G(s),V.c(),f(V,1),V.m(t,null)):V&&(k(),p(V,1,1,()=>{V=null}),I())},i(s){m||(f(T,s),f(V),m=!0)},o(s){p(T,s),p(V),m=!1},d(s){s&&c(t),T&&T.d(s),V&&V.d(),d=!1,w()}}}function C(s,t,e){let{$$slots:l={},$$scope:n}=t,{summary:a}=t,r=!0;return s.$$set=s=>{"summary"in s&&e(0,a=s.summary),"$$scope"in s&&e(2,n=s.$$scope)},[a,r,n,l,()=>e(1,r=!r)]}class U extends s{constructor(s){super(),t(this,s,C,B,e,{summary:0})}}function F(s,t,e){const l=s.slice();return l[6]=t[e],l}function K(s,t,e){const l=s.slice();return l[2]=t[e].items,l[3]=t[e].dirname,l}function Q(s){let t,e,l,h,f,u,m,d,p,E,b,k=s[6].kind.slice(0,1)+"",I=s[6].name+"";return{c(){t=n("li"),e=n("a"),l=n("span"),h=x(k),f=g(),u=n("span"),m=g(),d=n("span"),p=x(" "),E=x(I),this.h()},l(s){t=a(s,"LI",{});var n=r(t);e=a(n,"A",{href:!0,class:!0});var i=r(e);l=a(i,"SPAN",{class:!0});var o=r(l);h=D(o,k),o.forEach(c),f=v(i),u=a(i,"SPAN",{class:!0}),r(u).forEach(c),m=v(i),d=a(i,"SPAN",{});var g=r(d);p=D(g," "),E=D(g,I),g.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(l,"class","tag"),w(l,"is-success","class"===s[6].kind),w(l,"is-link","variable"===s[6].kind),w(l,"is-warning","function"===s[6].kind),i(u,"class","space svelte-vxblqn"),i(e,"href",b=s[0](s[6])),i(e,"class","svelte-vxblqn")},m(s,n){o(s,t,n),$(t,e),$(e,l),$(l,h),$(e,f),$(e,u),$(e,m),$(e,d),$(d,p),$(d,E)},p(s,t){2&t&&k!==(k=s[6].kind.slice(0,1)+"")&&P(h,k),2&t&&w(l,"is-success","class"===s[6].kind),2&t&&w(l,"is-link","variable"===s[6].kind),2&t&&w(l,"is-warning","function"===s[6].kind),2&t&&I!==(I=s[6].name+"")&&P(E,I),3&t&&b!==(b=s[0](s[6]))&&i(e,"href",b)},d(s){s&&c(t)}}}function z(s,t){let e,l,h,f,u,m=t[3]+"",d=t[2],p=[];for(let s=0;s<d.length;s+=1)p[s]=Q(F(t,d,s));return{key:s,first:null,c(){e=n("p"),l=x(m),h=g(),f=n("ul");for(let s=0;s<p.length;s+=1)p[s].c();u=g(),this.h()},l(s){e=a(s,"P",{class:!0});var t=r(e);l=D(t,m),t.forEach(c),h=v(s),f=a(s,"UL",{class:!0});var n=r(f);for(let s=0;s<p.length;s+=1)p[s].l(n);u=v(n),n.forEach(c),this.h()},h(){i(e,"class","menu-label"),i(f,"class","menu-list svelte-vxblqn"),this.first=e},m(s,t){o(s,e,t),$(e,l),o(s,h,t),o(s,f,t);for(let s=0;s<p.length;s+=1)p[s].m(f,null);$(f,u)},p(s,t){if(2&t&&m!==(m=s[3]+"")&&P(l,m),3&t){let e;for(d=s[2],e=0;e<d.length;e+=1){const l=F(s,d,e);p[e]?p[e].p(l,t):(p[e]=Q(l),p[e].c(),p[e].m(f,u))}for(;e<p.length;e+=1)p[e].d(1);p.length=d.length}},d(s){s&&c(e),s&&c(h),s&&c(f),A(p,s)}}}function W(s){let t,e=[],l=new Map,h=s[1];const f=s=>s[3];for(let t=0;t<h.length;t+=1){let n=K(s,h,t),a=f(n);l.set(a,e[t]=z(a,n))}return{c(){t=n("aside");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=a(s,"ASIDE",{class:!0});var l=r(t);for(let s=0;s<e.length;s+=1)e[s].l(l);l.forEach(c),this.h()},h(){i(t,"class","menu toc")},m(s,l){o(s,t,l);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(s,[n]){if(3&n){const a=s[1];e=L(e,n,f,1,s,a,l,t,T,z,null,K)}},i:V,o:V,d(s){s&&c(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function X(s,t,e){let{apiLink:l}=t,{folders:n=[]}=t;return s.$$set=s=>{"apiLink"in s&&e(0,l=s.apiLink),"folders"in s&&e(1,n=s.folders)},[l,n]}class Y extends s{constructor(s){super(),t(this,s,X,W,e,{apiLink:0,folders:1})}}const{Map:Z}=j;function ss(s,t,e){const l=s.slice();return l[12]=t[e],l}function ts(s,t,e){const l=s.slice();return l[9]=t[e],l}function es(s,t,e){const l=s.slice();return l[9]=t[e],l}function ls(s,t,e){const l=s.slice();return l[16]=t[e].items,l[17]=t[e].dirname,l}function ns(s){let t,e,l,i=s[9].name+"";return{c(){t=n("option"),e=x(i),this.h()},l(s){t=a(s,"OPTION",{value:!0});var l=r(t);e=D(l,i),l.forEach(c),this.h()},h(){t.__value=l=s[6](s[9]),t.value=t.__value},m(s,l){o(s,t,l),$(t,e)},p:V,d(s){s&&c(t)}}}function as(s,t){let e,l,h=t[16],f=[];for(let s=0;s<h.length;s+=1)f[s]=ns(es(t,h,s));return{key:s,first:null,c(){e=n("optgroup");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=a(s,"OPTGROUP",{label:!0});var t=r(e);for(let s=0;s<f.length;s+=1)f[s].l(t);t.forEach(c),this.h()},h(){i(e,"label",l=t[17]),this.first=e},m(s,t){o(s,e,t);for(let s=0;s<f.length;s+=1)f[s].m(e,null)},p(s,t){if(72&t){let l;for(h=s[16],l=0;l<h.length;l+=1){const n=es(s,h,l);f[l]?f[l].p(n,t):(f[l]=ns(n),f[l].c(),f[l].m(e,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=h.length}},d(s){s&&c(e),A(f,s)}}}function rs(s){let t,e,l;return e=new U({props:{$$slots:{default:[fs],summary:[cs,({open:s})=>({15:s}),({open:s})=>s?32768:0]},$$scope:{ctx:s}}}),{c(){t=n("div"),S(e.$$.fragment),this.h()},l(s){t=a(s,"DIV",{class:!0});var l=r(t);N(e.$$.fragment,l),l.forEach(c),this.h()},h(){i(t,"class","members")},m(s,n){o(s,t,n),H(e,t,null),l=!0},p(s,t){const l={};4227073&t&&(l.$$scope={dirty:t,ctx:s}),e.$set(l)},i(s){l||(f(e.$$.fragment,s),l=!0)},o(s){p(e.$$.fragment,s),l=!1},d(s){s&&c(t),M(e)}}}function cs(s){let t,e,l=s[15]?"Hide members":"Show members";return{c(){t=n("span"),e=x(l),this.h()},l(s){t=a(s,"SPAN",{slot:!0});var n=r(t);e=D(n,l),n.forEach(c),this.h()},h(){i(t,"slot","summary")},m(s,l){o(s,t,l),$(t,e)},p(s,t){32768&t&&l!==(l=s[15]?"Hide members":"Show members")&&P(e,l)},d(s){s&&c(t)}}}function is(s){let t,e;return{c(){t=n("span"),e=x("static")},l(s){t=a(s,"SPAN",{});var l=r(t);e=D(l,"static"),l.forEach(c)},m(s,l){o(s,t,l),$(t,e)},d(s){s&&c(t)}}}function os(s){let t,e;return{c(){t=n("span"),e=x("get")},l(s){t=a(s,"SPAN",{});var l=r(t);e=D(l,"get"),l.forEach(c)},m(s,l){o(s,t,l),$(t,e)},d(s){s&&c(t)}}}function hs(s){let t,e,l,h,f,u,m,d,p,E,b=s[12].name+"",k=s[7](s[12].params)+"",I=s[12].description+"",w=s[12].static&&is(),A="get"===s[12].kind&&os();return{c(){t=n("tr"),e=n("td"),w&&w.c(),l=g(),A&&A.c(),h=g(),f=n("th"),u=x(b),m=x(k),d=g(),p=n("td"),E=g(),this.h()},l(s){t=a(s,"TR",{});var n=r(t);e=a(n,"TD",{class:!0});var i=r(e);w&&w.l(i),l=v(i),A&&A.l(i),i.forEach(c),h=v(n),f=a(n,"TH",{});var o=r(f);u=D(o,b),m=D(o,k),o.forEach(c),d=v(n),p=a(n,"TD",{}),r(p).forEach(c),E=v(n),n.forEach(c),this.h()},h(){i(e,"class","has-text-grey")},m(s,n){o(s,t,n),$(t,e),w&&w.m(e,null),$(e,l),A&&A.m(e,null),$(t,h),$(t,f),$(f,u),$(f,m),$(t,d),$(t,p),p.innerHTML=I,$(t,E)},p(s,t){s[12].static?w||(w=is(),w.c(),w.m(e,l)):w&&(w.d(1),w=null),"get"===s[12].kind?A||(A=os(),A.c(),A.m(e,null)):A&&(A.d(1),A=null),1&t&&b!==(b=s[12].name+"")&&P(u,b),1&t&&k!==(k=s[7](s[12].params)+"")&&P(m,k),1&t&&I!==(I=s[12].description+"")&&(p.innerHTML=I)},d(s){s&&c(t),w&&w.d(),A&&A.d()}}}function fs(s){let t,e,l,h,f=s[9].members,u=[];for(let t=0;t<f.length;t+=1)u[t]=hs(ss(s,f,t));return{c(){t=g(),e=n("div"),l=n("div"),h=n("table");for(let s=0;s<u.length;s+=1)u[s].c();this.h()},l(s){t=v(s),e=a(s,"DIV",{class:!0});var n=r(e);l=a(n,"DIV",{class:!0});var i=r(l);h=a(i,"TABLE",{class:!0});var o=r(h);for(let s=0;s<u.length;s+=1)u[s].l(o);o.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(h,"class","table"),i(l,"class","table-container"),i(e,"class","notification is-white")},m(s,n){o(s,t,n),o(s,e,n),$(e,l),$(l,h);for(let s=0;s<u.length;s+=1)u[s].m(h,null)},p(s,t){if(129&t){let e;for(f=s[9].members,e=0;e<f.length;e+=1){const l=ss(s,f,e);u[e]?u[e].p(l,t):(u[e]=hs(l),u[e].c(),u[e].m(h,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=f.length}},d(s){s&&c(t),s&&c(e),A(u,s)}}}function us(s){let t,e,l,h,u,m,d,E,b,w,A,L,T,V,y=s[9].name+"",S=s[7](s[9].params)+"",N=s[9].description+"",H=s[9].members.length&&rs(s);return{c(){t=n("div"),e=n("h2"),l=n("a"),h=x("#"),m=g(),d=x(y),E=x(S),w=g(),A=n("div"),L=g(),H&&H.c(),T=g(),this.h()},l(s){t=a(s,"DIV",{class:!0});var n=r(t);e=a(n,"H2",{id:!0,class:!0});var i=r(e);l=a(i,"A",{href:!0,class:!0});var o=r(l);h=D(o,"#"),o.forEach(c),m=v(i),d=D(i,y),E=D(i,S),i.forEach(c),w=v(n),A=a(n,"DIV",{class:!0}),r(A).forEach(c),L=v(n),H&&H.l(n),T=v(n),n.forEach(c),this.h()},h(){i(l,"href",u=s[6](s[9])),i(l,"class","anchor"),i(e,"id",b=s[9].slug),i(e,"class","title is-5"),i(A,"class","content"),i(t,"class","item svelte-1f1b5ok")},m(s,n){o(s,t,n),$(t,e),$(e,l),$(l,h),$(e,m),$(e,d),$(e,E),$(t,w),$(t,A),A.innerHTML=N,$(t,L),H&&H.m(t,null),$(t,T),V=!0},p(s,n){(!V||1&n&&u!==(u=s[6](s[9])))&&i(l,"href",u),(!V||1&n)&&y!==(y=s[9].name+"")&&P(d,y),(!V||1&n)&&S!==(S=s[7](s[9].params)+"")&&P(E,S),(!V||1&n&&b!==(b=s[9].slug))&&i(e,"id",b),(!V||1&n)&&N!==(N=s[9].description+"")&&(A.innerHTML=N),s[9].members.length?H?(H.p(s,n),1&n&&f(H,1)):(H=rs(s),H.c(),f(H,1),H.m(t,T)):H&&(k(),p(H,1,1,()=>{H=null}),I())},i(s){V||(f(H),V=!0)},o(s){p(H),V=!1},d(s){s&&c(t),H&&H.d()}}}function ms(s){let t,e,l,h,u,m,d,b,P,V,O,R,j,q,J,G,B,C,U,F,K,Q,z=[],W=new Z;t=new y({props:{title:"API Reference",description:"Guides & tutorials"}});let X=s[3];const ss=s=>s[17];for(let t=0;t<X.length;t+=1){let e=ls(s,X,t),l=ss(e);W.set(l,z[t]=as(l,e))}q=new Y({props:{folders:s[3],apiLink:s[6]}});let es=s[0],ns=[];for(let t=0;t<es.length;t+=1)ns[t]=us(ts(s,es,t));const rs=s=>p(ns[s],1,1,()=>{ns[s]=null});return{c(){S(t.$$.fragment),e=g(),l=n("div"),h=n("div"),u=n("nav"),m=n("div"),d=n("select"),b=n("option"),P=x("Jump to...");for(let s=0;s<z.length;s+=1)z[s].c();O=g(),R=n("div"),j=n("div"),S(q.$$.fragment),J=g(),G=n("div"),B=n("h1"),C=x("API Reference"),U=g();for(let s=0;s<ns.length;s+=1)ns[s].c();this.h()},l(s){N(t.$$.fragment,s),e=v(s),l=a(s,"DIV",{class:!0});var n=r(l);h=a(n,"DIV",{class:!0});var i=r(h);u=a(i,"NAV",{class:!0});var o=r(u);m=a(o,"DIV",{class:!0});var f=r(m);d=a(f,"SELECT",{value:!0});var p=r(d);b=a(p,"OPTION",{value:!0});var g=r(b);P=D(g,"Jump to..."),g.forEach(c);for(let s=0;s<z.length;s+=1)z[s].l(p);p.forEach(c),f.forEach(c),o.forEach(c),O=v(i),R=a(i,"DIV",{class:!0});var $=r(R);j=a($,"DIV",{class:!0});var E=r(j);N(q.$$.fragment,E),E.forEach(c),J=v($),G=a($,"DIV",{class:!0});var k=r(G);B=a(k,"H1",{class:!0});var I=r(B);C=D(I,"API Reference"),I.forEach(c),U=v(k);for(let s=0;s<ns.length;s+=1)ns[s].l(k);k.forEach(c),$.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){b.__value="Jump to...",b.value=b.__value,i(m,"class","select is-rounded"),w(m,"is-loading",s[2]),i(u,"class","field"),i(j,"class","column is-3 is-hidden-touch"),i(B,"class","title"),i(G,"class","column"),i(R,"class","columns"),i(h,"class","container"),i(l,"class","section")},m(n,a){H(t,n,a),o(n,e,a),o(n,l,a),$(l,h),$(h,u),$(u,m),$(m,d),$(d,b),$(b,P);for(let s=0;s<z.length;s+=1)z[s].m(d,null);_(d,s[1].params.slug),$(h,O),$(h,R),$(R,j),H(q,j,null),$(R,J),$(R,G),$(G,B),$(B,C),$(G,U);for(let s=0;s<ns.length;s+=1)ns[s].m(G,null);F=!0,K||(Q=E(d,"change",ps),K=!0)},p(s,[t]){if(72&t){const e=s[3];z=L(z,t,ss,1,s,e,W,d,T,as,null,ls)}if((!F||74&t&&V!==(V=s[1].params.slug))&&_(d,s[1].params.slug),4&t&&w(m,"is-loading",s[2]),32961&t){let e;for(es=s[0],e=0;e<es.length;e+=1){const l=ts(s,es,e);ns[e]?(ns[e].p(l,t),f(ns[e],1)):(ns[e]=us(l),ns[e].c(),f(ns[e],1),ns[e].m(G,null))}for(k(),e=es.length;e<ns.length;e+=1)rs(e);I()}},i(s){if(!F){f(t.$$.fragment,s),f(q.$$.fragment,s);for(let s=0;s<es.length;s+=1)f(ns[s]);F=!0}},o(s){p(t.$$.fragment,s),p(q.$$.fragment,s),ns=ns.filter(Boolean);for(let s=0;s<ns.length;s+=1)p(ns[s]);F=!1},d(s){M(t,s),s&&c(e),s&&c(l);for(let s=0;s<z.length;s+=1)z[s].d();M(q),A(ns,s),K=!1,Q()}}}async function ds({params:{version:s}}){return{index:await this.fetch(s+"/api/data.json").then(s=>s.json())}}function ps(s){window.location=s.target.value}function gs(s,t,e){let l,n,{index:a}=t,r=[];const c=new Map;a.forEach(s=>{let t=c.get(s.dirname);t||(t={dirname:s.dirname,items:[]},r.push(t),c.set(s.dirname,t)),t.items.push(s)});const{page:i,preloading:o}=O();R(s,i,s=>e(1,l=s)),R(s,o,s=>e(2,n=s));return s.$$set=s=>{"index"in s&&e(0,a=s.index)},[a,l,n,r,i,o,s=>`${l.params.version}/api/#${s.slug}`,s=>s?`(${s.map(s=>s.name).join(", ")})`:""]}export default class extends s{constructor(s){super(),t(this,s,gs,ms,e,{index:0})}}export{ds as preload};
