import{B as s,S as a,i as e,s as t,e as r,t as l,b as n,g as c,h as o,j as i,k as d,f as h,l as u,o as f,p as v,C as p,D as m,E as g,r as E,u as $,w as q,x as y}from"./client.58d00cf1.js";function D(s){let a,e,t,m,g,E,$,q,y,D,V,b,x,w,S,k,j,A,O="latest"!==s[1].params.version&&I(s);return{c(){a=r("div"),e=r("div"),t=r("div"),m=r("div"),g=r("div"),E=r("div"),$=r("p"),q=l("The exact version you requested couldn't be found. Showing\n                "),y=r("em"),D=l(s[2]),V=l("\n                instead."),b=n(),x=r("div"),w=r("div"),O&&O.c(),S=n(),k=r("a"),j=l("Okay"),this.h()},l(r){a=c(r,"DIV",{class:!0});var l=o(a);e=c(l,"DIV",{class:!0});var n=o(e);t=c(n,"DIV",{class:!0});var u=o(t);m=c(u,"DIV",{class:!0});var f=o(m);g=c(f,"DIV",{class:!0});var v=o(g);E=c(v,"DIV",{class:!0});var p=o(E);$=c(p,"P",{});var I=o($);q=i(I,"The exact version you requested couldn't be found. Showing\n                "),y=c(I,"EM",{});var A=o(y);D=i(A,s[2]),A.forEach(d),V=i(I,"\n                instead."),I.forEach(d),p.forEach(d),b=h(v),x=c(v,"DIV",{class:!0});var T=o(x);w=c(T,"DIV",{class:!0});var B=o(w);O&&O.l(B),S=h(B),k=c(B,"A",{href:!0,class:!0,"sapper-noscroll":!0});var C=o(k);j=i(C,"Okay"),C.forEach(d),B.forEach(d),T.forEach(d),v.forEach(d),f.forEach(d),u.forEach(d),n.forEach(d),l.forEach(d),this.h()},h(){u(E,"class","level-left"),u(k,"href",A=s[1].path),u(k,"class","button is-danger is-light"),u(k,"sapper-noscroll",""),u(w,"class","buttons is-right"),u(x,"class","level-right"),u(g,"class","level"),u(m,"class","message-body"),u(t,"class","message is-danger"),u(e,"class","container"),u(a,"class","message-section")},m(s,r){f(s,a,r),v(a,e),v(e,t),v(t,m),v(m,g),v(g,E),v(E,$),v($,q),v($,y),v(y,D),v($,V),v(g,b),v(g,x),v(x,w),O&&O.m(w,null),v(w,S),v(w,k),v(k,j)},p(s,a){4&a&&p(D,s[2]),"latest"!==s[1].params.version?O?O.p(s,a):(O=I(s),O.c(),O.m(w,S)):O&&(O.d(1),O=null),2&a&&A!==(A=s[1].path)&&u(k,"href",A)},d(s){s&&d(a),O&&O.d()}}}function I(s){let a,e,t;return{c(){a=r("a"),e=l("Show latest instead"),this.h()},l(s){a=c(s,"A",{href:!0,class:!0});var t=o(a);e=i(t,"Show latest instead"),t.forEach(d),this.h()},h(){u(a,"href",t="latest/"+(s[0]||"")),u(a,"class","button is-text")},m(s,t){f(s,a,t),v(a,e)},p(s,e){1&e&&t!==(t="latest/"+(s[0]||""))&&u(a,"href",t)},d(s){s&&d(a)}}}function V(s){let a,e,t=s[1].query.requested&&s[1].query.requested!==s[2]&&D(s);const r=s[5].default,l=m(r,s,s[4],null);return{c(){t&&t.c(),a=n(),l&&l.c()},l(s){t&&t.l(s),a=h(s),l&&l.l(s)},m(s,r){t&&t.m(s,r),f(s,a,r),l&&l.m(s,r),e=!0},p(s,[e]){s[1].query.requested&&s[1].query.requested!==s[2]?t?t.p(s,e):(t=D(s),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null),l&&l.p&&16&e&&g(l,r,s,s[4],e,null,null)},i(s){e||(E(l,s),e=!0)},o(s){$(l,s),e=!1},d(s){t&&t.d(s),s&&d(a),l&&l.d(s)}}}function b(a,e,t){let r,l,{$$slots:n={},$$scope:c}=e,{segment:o}=e;const{page:i}=q();return y(a,i,s=>t(1,l=s)),a.$$set=s=>{"segment"in s&&t(0,o=s.segment),"$$scope"in s&&t(4,c=s.$$scope)},a.$$.update=()=>{2&a.$$.dirty&&t(2,r=function(a){const e=s.find(s=>s.tag===a);return e?e.version:a}(l.params.version))},[o,l,r,i,c,n]}export default class extends a{constructor(s){super(),e(this,s,b,V,t,{segment:0})}}
