import{S as s,i as e,s as t,D as l,e as n,g as a,h as r,k as c,l as i,o,E as h,r as f,I as u,J as m,K as d,u as p,b as g,f as v,p as $,L as E,M as b,N as k,O as I,t as x,j as D,C as P,G as w,F as A,P as L,Q as T,q as V,a as y,c as S,d as N,n as H,v as M,R as _,w as O,x as R,T as j}from"./c.client.5e1d404f.js";const q=s=>({open:2&s}),J=s=>({open:s[1]});function G(s){let e,t,g;const v=s[3].default,$=l(v,s,s[2],null);return{c(){e=n("div"),$&&$.c(),this.h()},l(s){e=a(s,"DIV",{class:!0});var t=r(e);$&&$.l(t),t.forEach(c),this.h()},h(){i(e,"class","details-content svelte-1p261ik")},m(s,t){o(s,e,t),$&&$.m(e,null),g=!0},p(s,e){$&&$.p&&4&e&&h($,v,s,s[2],e,null,null)},i(s){g||(f($,s),s&&u(()=>{t||(t=m(e,d,{},!0)),t.run(1)}),g=!0)},o(s){p($,s),s&&(t||(t=m(e,d,{},!1)),t.run(0)),g=!1},d(s){s&&c(e),$&&$.d(s),s&&t&&t.end()}}}function B(s){let e,t,u,m,d,w;const A=s[3].summary,L=l(A,s,s[2],J),T=L||function(s){let e;return{c(){e=x(s[0])},l(t){e=D(t,s[0])},m(s,t){o(s,e,t)},p(s,t){1&t&&P(e,s[0])},d(s){s&&c(e)}}}(s);let V=s[1]&&G(s);return{c(){e=n("div"),t=n("p"),T&&T.c(),u=g(),V&&V.c(),this.h()},l(s){e=a(s,"DIV",{class:!0});var l=r(e);t=a(l,"P",{class:!0});var n=r(t);T&&T.l(n),n.forEach(c),u=v(l),V&&V.l(l),l.forEach(c),this.h()},h(){i(t,"class","button summary"),i(e,"class","details")},m(l,n){o(l,e,n),$(e,t),T&&T.m(t,null),$(e,u),V&&V.m(e,null),m=!0,d||(w=E(t,"click",b(s[4])),d=!0)},p(s,[t]){L?L.p&&6&t&&h(L,A,s,s[2],t,q,J):T&&T.p&&1&t&&T.p(s,t),s[1]?V?(V.p(s,t),2&t&&f(V,1)):(V=G(s),V.c(),f(V,1),V.m(e,null)):V&&(k(),p(V,1,1,()=>{V=null}),I())},i(s){m||(f(T,s),f(V),m=!0)},o(s){p(T,s),p(V),m=!1},d(s){s&&c(e),T&&T.d(s),V&&V.d(),d=!1,w()}}}function C(s,e,t){let{$$slots:l={},$$scope:n}=e,{summary:a}=e,r=!0;return s.$$set=s=>{"summary"in s&&t(0,a=s.summary),"$$scope"in s&&t(2,n=s.$$scope)},[a,r,n,l,()=>t(1,r=!r)]}class U extends s{constructor(s){super(),e(this,s,C,B,t,{summary:0})}}function F(s,e,t){const l=s.slice();return l[2]=e[t].items,l[3]=e[t].dirname,l}function K(s,e,t){const l=s.slice();return l[6]=e[t],l}function Q(s){let e,t,l,h,f,u,m,d,p,E,b,k=s[6].kind.slice(0,1)+"",I=s[6].name+"";return{c(){e=n("li"),t=n("a"),l=n("span"),h=x(k),f=g(),u=n("span"),m=g(),d=n("span"),p=x(" "),E=x(I),this.h()},l(s){e=a(s,"LI",{});var n=r(e);t=a(n,"A",{href:!0,class:!0});var i=r(t);l=a(i,"SPAN",{class:!0});var o=r(l);h=D(o,k),o.forEach(c),f=v(i),u=a(i,"SPAN",{class:!0}),r(u).forEach(c),m=v(i),d=a(i,"SPAN",{});var g=r(d);p=D(g," "),E=D(g,I),g.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(l,"class","tag"),w(l,"is-success","class"===s[6].kind),w(l,"is-link","variable"===s[6].kind),w(l,"is-warning","function"===s[6].kind),i(u,"class","space svelte-vxblqn"),i(t,"href",b=s[0](s[6])),i(t,"class","svelte-vxblqn")},m(s,n){o(s,e,n),$(e,t),$(t,l),$(l,h),$(t,f),$(t,u),$(t,m),$(t,d),$(d,p),$(d,E)},p(s,e){2&e&&k!==(k=s[6].kind.slice(0,1)+"")&&P(h,k),2&e&&w(l,"is-success","class"===s[6].kind),2&e&&w(l,"is-link","variable"===s[6].kind),2&e&&w(l,"is-warning","function"===s[6].kind),2&e&&I!==(I=s[6].name+"")&&P(E,I),3&e&&b!==(b=s[0](s[6]))&&i(t,"href",b)},d(s){s&&c(e)}}}function z(s,e){let t,l,h,f,u,m=e[3]+"",d=e[2],p=[];for(let s=0;s<d.length;s+=1)p[s]=Q(K(e,d,s));return{key:s,first:null,c(){t=n("p"),l=x(m),h=g(),f=n("ul");for(let s=0;s<p.length;s+=1)p[s].c();u=g(),this.h()},l(s){t=a(s,"P",{class:!0});var e=r(t);l=D(e,m),e.forEach(c),h=v(s),f=a(s,"UL",{class:!0});var n=r(f);for(let s=0;s<p.length;s+=1)p[s].l(n);u=v(n),n.forEach(c),this.h()},h(){i(t,"class","menu-label"),i(f,"class","menu-list svelte-vxblqn"),this.first=t},m(s,e){o(s,t,e),$(t,l),o(s,h,e),o(s,f,e);for(let s=0;s<p.length;s+=1)p[s].m(f,null);$(f,u)},p(s,e){if(2&e&&m!==(m=s[3]+"")&&P(l,m),3&e){let t;for(d=s[2],t=0;t<d.length;t+=1){const l=K(s,d,t);p[t]?p[t].p(l,e):(p[t]=Q(l),p[t].c(),p[t].m(f,u))}for(;t<p.length;t+=1)p[t].d(1);p.length=d.length}},d(s){s&&c(t),s&&c(h),s&&c(f),A(p,s)}}}function W(s){let e,t=[],l=new Map,h=s[1];const f=s=>s[3];for(let e=0;e<h.length;e+=1){let n=F(s,h,e),a=f(n);l.set(a,t[e]=z(a,n))}return{c(){e=n("aside");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=a(s,"ASIDE",{class:!0});var l=r(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(c),this.h()},h(){i(e,"class","menu toc")},m(s,l){o(s,e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(s,[n]){if(3&n){const a=s[1];t=L(t,n,f,1,s,a,l,e,T,z,null,F)}},i:V,o:V,d(s){s&&c(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function X(s,e,t){let{apiLink:l}=e,{folders:n=[]}=e;return s.$$set=s=>{"apiLink"in s&&t(0,l=s.apiLink),"folders"in s&&t(1,n=s.folders)},[l,n]}class Y extends s{constructor(s){super(),e(this,s,X,W,t,{apiLink:0,folders:1})}}const{Map:Z}=j;function ss(s,e,t){const l=s.slice();return l[9]=e[t],l}function es(s,e,t){const l=s.slice();return l[12]=e[t],l}function ts(s,e,t){const l=s.slice();return l[16]=e[t].items,l[17]=e[t].dirname,l}function ls(s,e,t){const l=s.slice();return l[9]=e[t],l}function ns(s){let e,t,l,i=s[9].name+"";return{c(){e=n("option"),t=x(i),this.h()},l(s){e=a(s,"OPTION",{value:!0});var l=r(e);t=D(l,i),l.forEach(c),this.h()},h(){e.__value=l=s[6](s[9]),e.value=e.__value},m(s,l){o(s,e,l),$(e,t)},p:V,d(s){s&&c(e)}}}function as(s,e){let t,l,h=e[16],f=[];for(let s=0;s<h.length;s+=1)f[s]=ns(ls(e,h,s));return{key:s,first:null,c(){t=n("optgroup");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){t=a(s,"OPTGROUP",{label:!0});var e=r(t);for(let s=0;s<f.length;s+=1)f[s].l(e);e.forEach(c),this.h()},h(){i(t,"label",l=e[17]),this.first=t},m(s,e){o(s,t,e);for(let s=0;s<f.length;s+=1)f[s].m(t,null)},p(s,e){if(72&e){let l;for(h=s[16],l=0;l<h.length;l+=1){const n=ls(s,h,l);f[l]?f[l].p(n,e):(f[l]=ns(n),f[l].c(),f[l].m(t,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=h.length}},d(s){s&&c(t),A(f,s)}}}function rs(s){let e,t,l;return t=new U({props:{$$slots:{default:[fs],summary:[cs,({open:s})=>({15:s}),({open:s})=>s?32768:0]},$$scope:{ctx:s}}}),{c(){e=n("div"),S(t.$$.fragment),this.h()},l(s){e=a(s,"DIV",{class:!0});var l=r(e);N(t.$$.fragment,l),l.forEach(c),this.h()},h(){i(e,"class","members")},m(s,n){o(s,e,n),H(t,e,null),l=!0},p(s,e){const l={};4227073&e&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){l||(f(t.$$.fragment,s),l=!0)},o(s){p(t.$$.fragment,s),l=!1},d(s){s&&c(e),M(t)}}}function cs(s){let e,t,l=s[15]?"Hide members":"Show members";return{c(){e=n("span"),t=x(l),this.h()},l(s){e=a(s,"SPAN",{slot:!0});var n=r(e);t=D(n,l),n.forEach(c),this.h()},h(){i(e,"slot","summary")},m(s,l){o(s,e,l),$(e,t)},p(s,e){32768&e&&l!==(l=s[15]?"Hide members":"Show members")&&P(t,l)},d(s){s&&c(e)}}}function is(s){let e,t;return{c(){e=n("span"),t=x("static")},l(s){e=a(s,"SPAN",{});var l=r(e);t=D(l,"static"),l.forEach(c)},m(s,l){o(s,e,l),$(e,t)},d(s){s&&c(e)}}}function os(s){let e,t;return{c(){e=n("span"),t=x("get")},l(s){e=a(s,"SPAN",{});var l=r(e);t=D(l,"get"),l.forEach(c)},m(s,l){o(s,e,l),$(e,t)},d(s){s&&c(e)}}}function hs(s){let e,t,l,h,f,u,m,d,p,E,b=s[12].name+"",k=s[7](s[12].params)+"",I=s[12].description+"",w=s[12].static&&is(),A="get"===s[12].kind&&os();return{c(){e=n("tr"),t=n("td"),w&&w.c(),l=g(),A&&A.c(),h=g(),f=n("th"),u=x(b),m=x(k),d=g(),p=n("td"),E=g(),this.h()},l(s){e=a(s,"TR",{});var n=r(e);t=a(n,"TD",{class:!0});var i=r(t);w&&w.l(i),l=v(i),A&&A.l(i),i.forEach(c),h=v(n),f=a(n,"TH",{});var o=r(f);u=D(o,b),m=D(o,k),o.forEach(c),d=v(n),p=a(n,"TD",{}),r(p).forEach(c),E=v(n),n.forEach(c),this.h()},h(){i(t,"class","has-text-grey")},m(s,n){o(s,e,n),$(e,t),w&&w.m(t,null),$(t,l),A&&A.m(t,null),$(e,h),$(e,f),$(f,u),$(f,m),$(e,d),$(e,p),p.innerHTML=I,$(e,E)},p(s,e){s[12].static?w||(w=is(),w.c(),w.m(t,l)):w&&(w.d(1),w=null),"get"===s[12].kind?A||(A=os(),A.c(),A.m(t,null)):A&&(A.d(1),A=null),1&e&&b!==(b=s[12].name+"")&&P(u,b),1&e&&k!==(k=s[7](s[12].params)+"")&&P(m,k),1&e&&I!==(I=s[12].description+"")&&(p.innerHTML=I)},d(s){s&&c(e),w&&w.d(),A&&A.d()}}}function fs(s){let e,t,l,h,f=s[9].members,u=[];for(let e=0;e<f.length;e+=1)u[e]=hs(es(s,f,e));return{c(){e=g(),t=n("div"),l=n("div"),h=n("table");for(let s=0;s<u.length;s+=1)u[s].c();this.h()},l(s){e=v(s),t=a(s,"DIV",{class:!0});var n=r(t);l=a(n,"DIV",{class:!0});var i=r(l);h=a(i,"TABLE",{class:!0});var o=r(h);for(let s=0;s<u.length;s+=1)u[s].l(o);o.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(h,"class","table"),i(l,"class","table-container"),i(t,"class","notification is-white")},m(s,n){o(s,e,n),o(s,t,n),$(t,l),$(l,h);for(let s=0;s<u.length;s+=1)u[s].m(h,null)},p(s,e){if(129&e){let t;for(f=s[9].members,t=0;t<f.length;t+=1){const l=es(s,f,t);u[t]?u[t].p(l,e):(u[t]=hs(l),u[t].c(),u[t].m(h,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=f.length}},d(s){s&&c(e),s&&c(t),A(u,s)}}}function us(s){let e,t,l,h,u,m,d,E,b,w,A,L,T,V,y=s[9].name+"",S=s[7](s[9].params)+"",N=s[9].description+"",H=s[9].members.length&&rs(s);return{c(){e=n("div"),t=n("h2"),l=n("a"),h=x("#"),m=g(),d=x(y),E=x(S),w=g(),A=n("div"),L=g(),H&&H.c(),T=g(),this.h()},l(s){e=a(s,"DIV",{class:!0});var n=r(e);t=a(n,"H2",{id:!0,class:!0});var i=r(t);l=a(i,"A",{href:!0,class:!0});var o=r(l);h=D(o,"#"),o.forEach(c),m=v(i),d=D(i,y),E=D(i,S),i.forEach(c),w=v(n),A=a(n,"DIV",{class:!0}),r(A).forEach(c),L=v(n),H&&H.l(n),T=v(n),n.forEach(c),this.h()},h(){i(l,"href",u=s[6](s[9])),i(l,"class","anchor"),i(t,"id",b=s[9].slug),i(t,"class","title is-5"),i(A,"class","content"),i(e,"class","item svelte-1f1b5ok")},m(s,n){o(s,e,n),$(e,t),$(t,l),$(l,h),$(t,m),$(t,d),$(t,E),$(e,w),$(e,A),A.innerHTML=N,$(e,L),H&&H.m(e,null),$(e,T),V=!0},p(s,n){(!V||1&n&&u!==(u=s[6](s[9])))&&i(l,"href",u),(!V||1&n)&&y!==(y=s[9].name+"")&&P(d,y),(!V||1&n)&&S!==(S=s[7](s[9].params)+"")&&P(E,S),(!V||1&n&&b!==(b=s[9].slug))&&i(t,"id",b),(!V||1&n)&&N!==(N=s[9].description+"")&&(A.innerHTML=N),s[9].members.length?H?(H.p(s,n),1&n&&f(H,1)):(H=rs(s),H.c(),f(H,1),H.m(e,T)):H&&(k(),p(H,1,1,()=>{H=null}),I())},i(s){V||(f(H),V=!0)},o(s){p(H),V=!1},d(s){s&&c(e),H&&H.d()}}}function ms(s){let e,t,l,h,u,m,d,b,P,V,O,R,j,q,J,G,B,C,U,F,K,Q,z=[],W=new Z;e=new y({props:{title:"API Reference",description:"Guides & tutorials"}});let X=s[3];const es=s=>s[17];for(let e=0;e<X.length;e+=1){let t=ts(s,X,e),l=es(t);W.set(l,z[e]=as(l,t))}q=new Y({props:{folders:s[3],apiLink:s[6]}});let ls=s[0],ns=[];for(let e=0;e<ls.length;e+=1)ns[e]=us(ss(s,ls,e));const rs=s=>p(ns[s],1,1,()=>{ns[s]=null});return{c(){S(e.$$.fragment),t=g(),l=n("div"),h=n("div"),u=n("nav"),m=n("div"),d=n("select"),b=n("option"),P=x("Jump to...");for(let s=0;s<z.length;s+=1)z[s].c();O=g(),R=n("div"),j=n("div"),S(q.$$.fragment),J=g(),G=n("div"),B=n("h1"),C=x("API Reference"),U=g();for(let s=0;s<ns.length;s+=1)ns[s].c();this.h()},l(s){N(e.$$.fragment,s),t=v(s),l=a(s,"DIV",{class:!0});var n=r(l);h=a(n,"DIV",{class:!0});var i=r(h);u=a(i,"NAV",{class:!0});var o=r(u);m=a(o,"DIV",{class:!0});var f=r(m);d=a(f,"SELECT",{value:!0});var p=r(d);b=a(p,"OPTION",{value:!0});var g=r(b);P=D(g,"Jump to..."),g.forEach(c);for(let s=0;s<z.length;s+=1)z[s].l(p);p.forEach(c),f.forEach(c),o.forEach(c),O=v(i),R=a(i,"DIV",{class:!0});var $=r(R);j=a($,"DIV",{class:!0});var E=r(j);N(q.$$.fragment,E),E.forEach(c),J=v($),G=a($,"DIV",{class:!0});var k=r(G);B=a(k,"H1",{class:!0});var I=r(B);C=D(I,"API Reference"),I.forEach(c),U=v(k);for(let s=0;s<ns.length;s+=1)ns[s].l(k);k.forEach(c),$.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){b.__value="Jump to...",b.value=b.__value,i(m,"class","select is-rounded"),w(m,"is-loading",s[2]),i(u,"class","field"),i(j,"class","column is-3 is-hidden-touch"),i(B,"class","title"),i(G,"class","column"),i(R,"class","columns"),i(h,"class","container"),i(l,"class","section")},m(n,a){H(e,n,a),o(n,t,a),o(n,l,a),$(l,h),$(h,u),$(u,m),$(m,d),$(d,b),$(b,P);for(let s=0;s<z.length;s+=1)z[s].m(d,null);_(d,s[1].params.slug),$(h,O),$(h,R),$(R,j),H(q,j,null),$(R,J),$(R,G),$(G,B),$(B,C),$(G,U);for(let s=0;s<ns.length;s+=1)ns[s].m(G,null);F=!0,K||(Q=E(d,"change",ps),K=!0)},p(s,[e]){if(72&e){const t=s[3];z=L(z,e,es,1,s,t,W,d,T,as,null,ts)}if((!F||74&e&&V!==(V=s[1].params.slug))&&_(d,s[1].params.slug),4&e&&w(m,"is-loading",s[2]),32961&e){let t;for(ls=s[0],t=0;t<ls.length;t+=1){const l=ss(s,ls,t);ns[t]?(ns[t].p(l,e),f(ns[t],1)):(ns[t]=us(l),ns[t].c(),f(ns[t],1),ns[t].m(G,null))}for(k(),t=ls.length;t<ns.length;t+=1)rs(t);I()}},i(s){if(!F){f(e.$$.fragment,s),f(q.$$.fragment,s);for(let s=0;s<ls.length;s+=1)f(ns[s]);F=!0}},o(s){p(e.$$.fragment,s),p(q.$$.fragment,s),ns=ns.filter(Boolean);for(let s=0;s<ns.length;s+=1)p(ns[s]);F=!1},d(s){M(e,s),s&&c(t),s&&c(l);for(let s=0;s<z.length;s+=1)z[s].d();M(q),A(ns,s),K=!1,Q()}}}async function ds({params:{version:s}}){return{index:await this.fetch(s+"/api/data.json").then(s=>s.json())}}function ps(s){window.location=s.target.value}function gs(s,e,t){let l,n,{index:a}=e,r=[];const c=new Map;a.forEach(s=>{let e=c.get(s.dirname);e||(e={dirname:s.dirname,items:[]},r.push(e),c.set(s.dirname,e)),e.items.push(s)});const{page:i,preloading:o}=O();R(s,i,s=>t(1,l=s)),R(s,o,s=>t(2,n=s));return s.$$set=s=>{"index"in s&&t(0,a=s.index)},[a,l,n,r,i,o,s=>`${l.params.version}/api/#${s.slug}`,s=>s?`(${s.map(s=>s.name).join(", ")})`:""]}export default class extends s{constructor(s){super(),e(this,s,gs,ms,t,{index:0})}}export{ds as preload};
