import{S as s,i as e,s as t,D as l,e as n,g as a,h as r,k as c,l as i,o,E as h,F as f,r as u,J as m,K as d,u as p,t as g,b as v,j as $,f as E,p as b,L as k,M as I,C as x,N as D,O as P,P as w,H as A,G as L,Q as T,R as V,q as y,a as _,c as S,d as H,n as N,v as M,w as O,x as R,T as j}from"./c.client.962de2d6.js";const q=s=>({open:2&s}),J=s=>({open:s[1]});function G(s){let e,t,g;const v=s[3].default,$=l(v,s,s[2],null);return{c(){e=n("div"),$&&$.c(),this.h()},l(s){e=a(s,"DIV",{class:!0});var t=r(e);$&&$.l(t),t.forEach(c),this.h()},h(){i(e,"class","details-content svelte-1p261ik")},m(s,t){o(s,e,t),$&&$.m(e,null),g=!0},p(s,e){$&&$.p&&4&e&&$.p(h(v,s,s[2],null),f(v,s[2],e,null))},i(s){g||(u($,s),s&&m(()=>{t||(t=d(e,w,{},!0)),t.run(1)}),g=!0)},o(s){p($,s),s&&(t||(t=d(e,w,{},!1)),t.run(0)),g=!1},d(s){s&&c(e),$&&$.d(s),s&&t&&t.end()}}}function B(s){let e,t,m,d,w,A;const L=s[3].summary,T=l(L,s,s[2],J);let V=s[1]&&G(s);return{c(){e=n("div"),t=n("p"),T||(m=g(s[0])),T&&T.c(),d=v(),V&&V.c(),this.h()},l(l){e=a(l,"DIV",{class:!0});var n=r(e);t=a(n,"P",{class:!0});var i=r(t);T||(m=$(i,s[0])),T&&T.l(i),i.forEach(c),d=E(n),V&&V.l(n),n.forEach(c),this.h()},h(){i(t,"class","button summary"),i(e,"class","details")},m(l,n){o(l,e,n),b(e,t),T||b(t,m),T&&T.m(t,null),b(e,d),V&&V.m(e,null),w=!0,A=k(t,"click",I(s[4]))},p(s,[t]){T||(!w||1&t)&&x(m,s[0]),T&&T.p&&6&t&&T.p(h(L,s,s[2],J),f(L,s[2],t,q)),s[1]?V?(V.p(s,t),u(V,1)):(V=G(s),V.c(),u(V,1),V.m(e,null)):V&&(D(),p(V,1,1,()=>{V=null}),P())},i(s){w||(u(T,s),u(V),w=!0)},o(s){p(T,s),p(V),w=!1},d(s){s&&c(e),T&&T.d(s),V&&V.d(),A()}}}function C(s,e,t){let{summary:l}=e,n=!0,{$$slots:a={},$$scope:r}=e;return s.$set=s=>{"summary"in s&&t(0,l=s.summary),"$$scope"in s&&t(2,r=s.$$scope)},[l,n,r,a,()=>t(1,n=!n)]}class U extends s{constructor(s){super(),e(this,s,C,B,t,{summary:0})}}function F(s,e,t){const l=s.slice();return l[6]=e[t],l}function K(s,e,t){const l=s.slice();return l[2]=e[t].items,l[3]=e[t].dirname,l}function Q(s){let e,t,l,h,f,u,m,d,p,k,I,D=s[6].kind.slice(0,1)+"",P=s[6].name+"";return{c(){e=n("li"),t=n("a"),l=n("span"),h=g(D),f=v(),u=n("span"),m=v(),d=n("span"),p=g(" "),k=g(P),this.h()},l(s){e=a(s,"LI",{});var n=r(e);t=a(n,"A",{href:!0,class:!0});var i=r(t);l=a(i,"SPAN",{class:!0});var o=r(l);h=$(o,D),o.forEach(c),f=E(i),u=a(i,"SPAN",{class:!0}),r(u).forEach(c),m=E(i),d=a(i,"SPAN",{});var g=r(d);p=$(g," "),k=$(g,P),g.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(l,"class","tag"),A(l,"is-success","class"===s[6].kind),A(l,"is-link","variable"===s[6].kind),A(l,"is-warning","function"===s[6].kind),i(u,"class","space svelte-vxblqn"),i(t,"href",I=s[0](s[6])),i(t,"class","svelte-vxblqn")},m(s,n){o(s,e,n),b(e,t),b(t,l),b(l,h),b(t,f),b(t,u),b(t,m),b(t,d),b(d,p),b(d,k)},p(s,e){2&e&&D!==(D=s[6].kind.slice(0,1)+"")&&x(h,D),2&e&&A(l,"is-success","class"===s[6].kind),2&e&&A(l,"is-link","variable"===s[6].kind),2&e&&A(l,"is-warning","function"===s[6].kind),2&e&&P!==(P=s[6].name+"")&&x(k,P),3&e&&I!==(I=s[0](s[6]))&&i(t,"href",I)},d(s){s&&c(e)}}}function z(s,e){let t,l,h,f,u,m=e[3]+"",d=e[2],p=[];for(let s=0;s<d.length;s+=1)p[s]=Q(F(e,d,s));return{key:s,first:null,c(){t=n("p"),l=g(m),h=v(),f=n("ul");for(let s=0;s<p.length;s+=1)p[s].c();u=v(),this.h()},l(s){t=a(s,"P",{class:!0});var e=r(t);l=$(e,m),e.forEach(c),h=E(s),f=a(s,"UL",{class:!0});var n=r(f);for(let s=0;s<p.length;s+=1)p[s].l(n);u=E(n),n.forEach(c),this.h()},h(){i(t,"class","menu-label"),i(f,"class","menu-list svelte-vxblqn"),this.first=t},m(s,e){o(s,t,e),b(t,l),o(s,h,e),o(s,f,e);for(let s=0;s<p.length;s+=1)p[s].m(f,null);b(f,u)},p(s,e){if(2&e&&m!==(m=s[3]+"")&&x(l,m),3&e){let t;for(d=s[2],t=0;t<d.length;t+=1){const l=F(s,d,t);p[t]?p[t].p(l,e):(p[t]=Q(l),p[t].c(),p[t].m(f,u))}for(;t<p.length;t+=1)p[t].d(1);p.length=d.length}},d(s){s&&c(t),s&&c(h),s&&c(f),L(p,s)}}}function W(s){let e,t=[],l=new Map,h=s[1];const f=s=>s[3];for(let e=0;e<h.length;e+=1){let n=K(s,h,e),a=f(n);l.set(a,t[e]=z(a,n))}return{c(){e=n("aside");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=a(s,"ASIDE",{class:!0});var l=r(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(c),this.h()},h(){i(e,"class","menu toc")},m(s,l){o(s,e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(s,[n]){if(3&n){const a=s[1];t=T(t,n,f,1,s,a,l,e,V,z,null,K)}},i:y,o:y,d(s){s&&c(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function X(s,e,t){let{apiLink:l}=e,{folders:n=[]}=e;return s.$set=s=>{"apiLink"in s&&t(0,l=s.apiLink),"folders"in s&&t(1,n=s.folders)},[l,n]}class Y extends s{constructor(s){super(),e(this,s,X,W,t,{apiLink:0,folders:1})}}const{Map:Z}=j;function ss(s,e,t){const l=s.slice();return l[12]=e[t],l}function es(s,e,t){const l=s.slice();return l[9]=e[t],l}function ts(s,e,t){const l=s.slice();return l[9]=e[t],l}function ls(s,e,t){const l=s.slice();return l[16]=e[t].items,l[17]=e[t].dirname,l}function ns(s){let e,t,l,i=s[9].name+"";return{c(){e=n("option"),t=g(i),this.h()},l(s){e=a(s,"OPTION",{value:!0});var l=r(e);t=$(l,i),l.forEach(c),this.h()},h(){e.__value=l=s[6](s[9]),e.value=e.__value},m(s,l){o(s,e,l),b(e,t)},p:y,d(s){s&&c(e)}}}function as(s,e){let t,l,h=e[16],f=[];for(let s=0;s<h.length;s+=1)f[s]=ns(ts(e,h,s));return{key:s,first:null,c(){t=n("optgroup");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){t=a(s,"OPTGROUP",{label:!0});var e=r(t);for(let s=0;s<f.length;s+=1)f[s].l(e);e.forEach(c),this.h()},h(){i(t,"label",l=e[17]),this.first=t},m(s,e){o(s,t,e);for(let s=0;s<f.length;s+=1)f[s].m(t,null)},p(s,e){if(72&e){let l;for(h=s[16],l=0;l<h.length;l+=1){const n=ts(s,h,l);f[l]?f[l].p(n,e):(f[l]=ns(n),f[l].c(),f[l].m(t,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=h.length}},d(s){s&&c(t),L(f,s)}}}function rs(s){let e,t;const l=new U({props:{$$slots:{default:[fs],summary:[cs,({open:s})=>({15:s}),({open:s})=>s?32768:0]},$$scope:{ctx:s}}});return{c(){e=n("div"),S(l.$$.fragment),this.h()},l(s){e=a(s,"DIV",{class:!0});var t=r(e);H(l.$$.fragment,t),t.forEach(c),this.h()},h(){i(e,"class","members")},m(s,n){o(s,e,n),N(l,e,null),t=!0},p(s,e){const t={};4227073&e&&(t.$$scope={dirty:e,ctx:s}),l.$set(t)},i(s){t||(u(l.$$.fragment,s),t=!0)},o(s){p(l.$$.fragment,s),t=!1},d(s){s&&c(e),M(l)}}}function cs(s){let e,t,l=s[15]?"Hide members":"Show members";return{c(){e=n("span"),t=g(l),this.h()},l(s){e=a(s,"SPAN",{slot:!0});var n=r(e);t=$(n,l),n.forEach(c),this.h()},h(){i(e,"slot","summary")},m(s,l){o(s,e,l),b(e,t)},p(s,e){32768&e&&l!==(l=s[15]?"Hide members":"Show members")&&x(t,l)},d(s){s&&c(e)}}}function is(s){let e,t;return{c(){e=n("span"),t=g("static")},l(s){e=a(s,"SPAN",{});var l=r(e);t=$(l,"static"),l.forEach(c)},m(s,l){o(s,e,l),b(e,t)},d(s){s&&c(e)}}}function os(s){let e,t;return{c(){e=n("span"),t=g("get")},l(s){e=a(s,"SPAN",{});var l=r(e);t=$(l,"get"),l.forEach(c)},m(s,l){o(s,e,l),b(e,t)},d(s){s&&c(e)}}}function hs(s){let e,t,l,h,f,u,m,d,p,k,I=s[12].name+"",D=s[7](s[12].params)+"",P=s[12].description+"",w=s[12].static&&is(),A="get"===s[12].kind&&os();return{c(){e=n("tr"),t=n("td"),w&&w.c(),l=v(),A&&A.c(),h=v(),f=n("th"),u=g(I),m=g(D),d=v(),p=n("td"),k=v(),this.h()},l(s){e=a(s,"TR",{});var n=r(e);t=a(n,"TD",{class:!0});var i=r(t);w&&w.l(i),l=E(i),A&&A.l(i),i.forEach(c),h=E(n),f=a(n,"TH",{});var o=r(f);u=$(o,I),m=$(o,D),o.forEach(c),d=E(n),p=a(n,"TD",{}),r(p).forEach(c),k=E(n),n.forEach(c),this.h()},h(){i(t,"class","has-text-grey")},m(s,n){o(s,e,n),b(e,t),w&&w.m(t,null),b(t,l),A&&A.m(t,null),b(e,h),b(e,f),b(f,u),b(f,m),b(e,d),b(e,p),p.innerHTML=P,b(e,k)},p(s,e){s[12].static?w||(w=is(),w.c(),w.m(t,l)):w&&(w.d(1),w=null),"get"===s[12].kind?A||(A=os(),A.c(),A.m(t,null)):A&&(A.d(1),A=null),1&e&&I!==(I=s[12].name+"")&&x(u,I),1&e&&D!==(D=s[7](s[12].params)+"")&&x(m,D),1&e&&P!==(P=s[12].description+"")&&(p.innerHTML=P)},d(s){s&&c(e),w&&w.d(),A&&A.d()}}}function fs(s){let e,t,l,h,f=s[9].members,u=[];for(let e=0;e<f.length;e+=1)u[e]=hs(ss(s,f,e));return{c(){e=v(),t=n("div"),l=n("div"),h=n("table");for(let s=0;s<u.length;s+=1)u[s].c();this.h()},l(s){e=E(s),t=a(s,"DIV",{class:!0});var n=r(t);l=a(n,"DIV",{class:!0});var i=r(l);h=a(i,"TABLE",{class:!0});var o=r(h);for(let s=0;s<u.length;s+=1)u[s].l(o);o.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(h,"class","table"),i(l,"class","table-container"),i(t,"class","notification is-white")},m(s,n){o(s,e,n),o(s,t,n),b(t,l),b(l,h);for(let s=0;s<u.length;s+=1)u[s].m(h,null)},p(s,e){if(129&e){let t;for(f=s[9].members,t=0;t<f.length;t+=1){const l=ss(s,f,t);u[t]?u[t].p(l,e):(u[t]=hs(l),u[t].c(),u[t].m(h,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=f.length}},d(s){s&&c(e),s&&c(t),L(u,s)}}}function us(s){let e,t,l,h,f,m,d,k,I,w,A,L,T,V,y=s[9].name+"",_=s[7](s[9].params)+"",S=s[9].description+"",H=s[9].members.length&&rs(s);return{c(){e=n("div"),t=n("h2"),l=n("a"),h=g("#"),m=v(),d=g(y),k=g(_),w=v(),A=n("div"),L=v(),H&&H.c(),T=v(),this.h()},l(s){e=a(s,"DIV",{class:!0});var n=r(e);t=a(n,"H2",{id:!0,class:!0});var i=r(t);l=a(i,"A",{href:!0,class:!0});var o=r(l);h=$(o,"#"),o.forEach(c),m=E(i),d=$(i,y),k=$(i,_),i.forEach(c),w=E(n),A=a(n,"DIV",{class:!0}),r(A).forEach(c),L=E(n),H&&H.l(n),T=E(n),n.forEach(c),this.h()},h(){i(l,"href",f=s[6](s[9])),i(l,"class","anchor"),i(t,"id",I=s[9].slug),i(t,"class","title is-5"),i(A,"class","content"),i(e,"class","item svelte-1f1b5ok")},m(s,n){o(s,e,n),b(e,t),b(t,l),b(l,h),b(t,m),b(t,d),b(t,k),b(e,w),b(e,A),A.innerHTML=S,b(e,L),H&&H.m(e,null),b(e,T),V=!0},p(s,n){(!V||1&n&&f!==(f=s[6](s[9])))&&i(l,"href",f),(!V||1&n)&&y!==(y=s[9].name+"")&&x(d,y),(!V||1&n)&&_!==(_=s[7](s[9].params)+"")&&x(k,_),(!V||1&n&&I!==(I=s[9].slug))&&i(t,"id",I),(!V||1&n)&&S!==(S=s[9].description+"")&&(A.innerHTML=S),s[9].members.length?H?(H.p(s,n),u(H,1)):(H=rs(s),H.c(),u(H,1),H.m(e,T)):H&&(D(),p(H,1,1,()=>{H=null}),P())},i(s){V||(u(H),V=!0)},o(s){p(H),V=!1},d(s){s&&c(e),H&&H.d()}}}function ms(s){let e,t,l,h,f,m,d,I,x,w,y,O,R,j,q,J,G,B,C,U=[],F=new Z;const K=new _({props:{title:"API Reference",description:"Guides & tutorials"}});let Q=s[3];const z=s=>s[17];for(let e=0;e<Q.length;e+=1){let t=ls(s,Q,e),l=z(t);F.set(l,U[e]=as(l,t))}const W=new Y({props:{folders:s[3],apiLink:s[6]}});let X=s[0],ss=[];for(let e=0;e<X.length;e+=1)ss[e]=us(es(s,X,e));const ts=s=>p(ss[s],1,1,()=>{ss[s]=null});return{c(){S(K.$$.fragment),e=v(),t=n("div"),l=n("div"),h=n("nav"),f=n("div"),m=n("select"),d=n("option"),I=g("Jump to...");for(let s=0;s<U.length;s+=1)U[s].c();w=v(),y=n("div"),O=n("div"),S(W.$$.fragment),R=v(),j=n("div"),q=n("h1"),J=g("API Reference"),G=v();for(let s=0;s<ss.length;s+=1)ss[s].c();this.h()},l(s){H(K.$$.fragment,s),e=E(s),t=a(s,"DIV",{class:!0});var n=r(t);l=a(n,"DIV",{class:!0});var i=r(l);h=a(i,"NAV",{class:!0});var o=r(h);f=a(o,"DIV",{class:!0});var u=r(f);m=a(u,"SELECT",{value:!0});var p=r(m);d=a(p,"OPTION",{value:!0});var g=r(d);I=$(g,"Jump to..."),g.forEach(c);for(let s=0;s<U.length;s+=1)U[s].l(p);p.forEach(c),u.forEach(c),o.forEach(c),w=E(i),y=a(i,"DIV",{class:!0});var v=r(y);O=a(v,"DIV",{class:!0});var b=r(O);H(W.$$.fragment,b),b.forEach(c),R=E(v),j=a(v,"DIV",{class:!0});var k=r(j);q=a(k,"H1",{class:!0});var x=r(q);J=$(x,"API Reference"),x.forEach(c),G=E(k);for(let s=0;s<ss.length;s+=1)ss[s].l(k);k.forEach(c),v.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){d.__value="Jump to...",d.value=d.__value,i(f,"class","select is-rounded"),A(f,"is-loading",s[2]),i(h,"class","field"),i(O,"class","column is-3 is-hidden-touch"),i(q,"class","title"),i(j,"class","column"),i(y,"class","columns"),i(l,"class","container"),i(t,"class","section")},m(n,a){N(K,n,a),o(n,e,a),o(n,t,a),b(t,l),b(l,h),b(h,f),b(f,m),b(m,d),b(d,I);for(let s=0;s<U.length;s+=1)U[s].m(m,null);x=s[1].params.slug;for(var r=0;r<m.options.length;r+=1){var c=m.options[r];if(c.__value===x){c.selected=!0;break}}b(l,w),b(l,y),b(y,O),N(W,O,null),b(y,R),b(y,j),b(j,q),b(q,J),b(j,G);for(let s=0;s<ss.length;s+=1)ss[s].m(j,null);B=!0,C=k(m,"change",ps)},p(s,[e]){if(72&e){const t=s[3];U=T(U,e,z,1,s,t,F,m,V,as,null,ls)}if(!B||2&e&&x!==(x=s[1].params.slug))for(var t=0;t<m.options.length;t+=1){var l=m.options[t];if(l.__value===x){l.selected=!0;break}}if(4&e&&A(f,"is-loading",s[2]),32961&e){let t;for(X=s[0],t=0;t<X.length;t+=1){const l=es(s,X,t);ss[t]?(ss[t].p(l,e),u(ss[t],1)):(ss[t]=us(l),ss[t].c(),u(ss[t],1),ss[t].m(j,null))}for(D(),t=X.length;t<ss.length;t+=1)ts(t);P()}},i(s){if(!B){u(K.$$.fragment,s),u(W.$$.fragment,s);for(let s=0;s<X.length;s+=1)u(ss[s]);B=!0}},o(s){p(K.$$.fragment,s),p(W.$$.fragment,s),ss=ss.filter(Boolean);for(let s=0;s<ss.length;s+=1)p(ss[s]);B=!1},d(s){M(K,s),s&&c(e),s&&c(t);for(let s=0;s<U.length;s+=1)U[s].d();M(W),L(ss,s),C()}}}async function ds({params:{version:s}}){return{index:await this.fetch(`${s}/api/data.json`).then(s=>s.json())}}function ps(s){window.location=s.target.value}function gs(s,e,t){let l,n,{index:a}=e,r=[];const c=new Map;a.forEach(s=>{let e=c.get(s.dirname);e||(e={dirname:s.dirname,items:[]},r.push(e),c.set(s.dirname,e)),e.items.push(s)});const{page:i,preloading:o}=O();R(s,i,s=>t(1,l=s)),R(s,o,s=>t(2,n=s));return s.$set=s=>{"index"in s&&t(0,a=s.index)},[a,l,n,r,i,o,s=>`${l.params.version}/api/#${s.slug}`,s=>s?`(${s.map(s=>s.name).join(", ")})`:""]}export default class extends s{constructor(s){super(),e(this,s,gs,ms,t,{index:0})}}export{ds as preload};
