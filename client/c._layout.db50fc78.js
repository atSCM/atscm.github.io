import{B as s,S as a,i as e,s as t,e as r,t as l,b as n,g as c,h as o,j as i,k as h,f as u,l as d,o as f,p as v,C as p,D as m,E as g,r as E,u as $,w as q,x as y}from"./c.client.4f038b68.js";function D(s){let a,e,t,m,g,E,$,q,y,D,I,V,x,w,S,k,j,A,O="latest"!==s[2].params.version&&b(s);return{c(){a=r("div"),e=r("div"),t=r("div"),m=r("div"),g=r("div"),E=r("div"),$=r("p"),q=l("The exact version you requested couldn't be found. Showing\n                "),y=r("em"),D=l(s[1]),I=l("\n                instead."),V=n(),x=r("div"),w=r("div"),O&&O.c(),S=n(),k=r("a"),j=l("Okay"),this.h()},l(r){a=c(r,"DIV",{class:!0});var l=o(a);e=c(l,"DIV",{class:!0});var n=o(e);t=c(n,"DIV",{class:!0});var d=o(t);m=c(d,"DIV",{class:!0});var f=o(m);g=c(f,"DIV",{class:!0});var v=o(g);E=c(v,"DIV",{class:!0});var p=o(E);$=c(p,"P",{});var b=o($);q=i(b,"The exact version you requested couldn't be found. Showing\n                "),y=c(b,"EM",{});var A=o(y);D=i(A,s[1]),A.forEach(h),I=i(b,"\n                instead."),b.forEach(h),p.forEach(h),V=u(v),x=c(v,"DIV",{class:!0});var T=o(x);w=c(T,"DIV",{class:!0});var B=o(w);O&&O.l(B),S=u(B),k=c(B,"A",{href:!0,class:!0,"sapper-noscroll":!0});var C=o(k);j=i(C,"Okay"),C.forEach(h),B.forEach(h),T.forEach(h),v.forEach(h),f.forEach(h),d.forEach(h),n.forEach(h),l.forEach(h),this.h()},h(){d(E,"class","level-left"),d(k,"href",A=s[2].path),d(k,"class","button is-danger is-light"),d(k,"sapper-noscroll",""),d(w,"class","buttons is-right"),d(x,"class","level-right"),d(g,"class","level"),d(m,"class","message-body"),d(t,"class","message is-danger"),d(e,"class","container"),d(a,"class","message-section")},m(s,r){f(s,a,r),v(a,e),v(e,t),v(t,m),v(m,g),v(g,E),v(E,$),v($,q),v($,y),v(y,D),v($,I),v(g,V),v(g,x),v(x,w),O&&O.m(w,null),v(w,S),v(w,k),v(k,j)},p(s,a){2&a&&p(D,s[1]),"latest"!==s[2].params.version?O?O.p(s,a):(O=b(s),O.c(),O.m(w,S)):O&&(O.d(1),O=null),4&a&&A!==(A=s[2].path)&&d(k,"href",A)},d(s){s&&h(a),O&&O.d()}}}function b(s){let a,e,t;return{c(){a=r("a"),e=l("Show latest instead"),this.h()},l(s){a=c(s,"A",{href:!0,class:!0});var t=o(a);e=i(t,"Show latest instead"),t.forEach(h),this.h()},h(){d(a,"href",t="latest/"+(s[0]||"")),d(a,"class","button is-text")},m(s,t){f(s,a,t),v(a,e)},p(s,e){1&e&&t!==(t="latest/"+(s[0]||""))&&d(a,"href",t)},d(s){s&&h(a)}}}function I(s){let a,e,t=s[2].query.requested&&s[2].query.requested!==s[1]&&D(s);const r=s[5].default,l=m(r,s,s[4],null);return{c(){t&&t.c(),a=n(),l&&l.c()},l(s){t&&t.l(s),a=u(s),l&&l.l(s)},m(s,r){t&&t.m(s,r),f(s,a,r),l&&l.m(s,r),e=!0},p(s,[e]){s[2].query.requested&&s[2].query.requested!==s[1]?t?t.p(s,e):(t=D(s),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null),l&&l.p&&16&e&&g(l,r,s,s[4],e,null,null)},i(s){e||(E(l,s),e=!0)},o(s){$(l,s),e=!1},d(s){t&&t.d(s),s&&h(a),l&&l.d(s)}}}function V(a,e,t){let r,{segment:l}=e;const{page:n}=q();y(a,n,s=>t(2,r=s));let c,{$$slots:o={},$$scope:i}=e;return a.$$set=s=>{"segment"in s&&t(0,l=s.segment),"$$scope"in s&&t(4,i=s.$$scope)},a.$$.update=()=>{4&a.$$.dirty&&t(1,c=function(a){const e=s.find(s=>s.tag===a);return e?e.version:a}(r.params.version))},[l,c,r,n,i,o]}export default class extends a{constructor(s){super(),e(this,s,V,I,t,{segment:0})}}
