import{B as s,S as e,i as a,s as t,e as r,t as l,b as n,g as c,h as o,j as i,k as d,f as h,l as u,o as f,p as v,C as p,D as m,E as g,r as E,u as $,w as q,x as y}from"./c.client.5e1d404f.js";function D(s){let e,a,t,m,g,E,$,q,y,D,V,b,x,w,S,k,j,A,O="latest"!==s[2].params.version&&I(s);return{c(){e=r("div"),a=r("div"),t=r("div"),m=r("div"),g=r("div"),E=r("div"),$=r("p"),q=l("The exact version you requested couldn't be found. Showing\n                "),y=r("em"),D=l(s[1]),V=l("\n                instead."),b=n(),x=r("div"),w=r("div"),O&&O.c(),S=n(),k=r("a"),j=l("Okay"),this.h()},l(r){e=c(r,"DIV",{class:!0});var l=o(e);a=c(l,"DIV",{class:!0});var n=o(a);t=c(n,"DIV",{class:!0});var u=o(t);m=c(u,"DIV",{class:!0});var f=o(m);g=c(f,"DIV",{class:!0});var v=o(g);E=c(v,"DIV",{class:!0});var p=o(E);$=c(p,"P",{});var I=o($);q=i(I,"The exact version you requested couldn't be found. Showing\n                "),y=c(I,"EM",{});var A=o(y);D=i(A,s[1]),A.forEach(d),V=i(I,"\n                instead."),I.forEach(d),p.forEach(d),b=h(v),x=c(v,"DIV",{class:!0});var T=o(x);w=c(T,"DIV",{class:!0});var B=o(w);O&&O.l(B),S=h(B),k=c(B,"A",{href:!0,class:!0,"sapper-noscroll":!0});var C=o(k);j=i(C,"Okay"),C.forEach(d),B.forEach(d),T.forEach(d),v.forEach(d),f.forEach(d),u.forEach(d),n.forEach(d),l.forEach(d),this.h()},h(){u(E,"class","level-left"),u(k,"href",A=s[2].path),u(k,"class","button is-danger is-light"),u(k,"sapper-noscroll",""),u(w,"class","buttons is-right"),u(x,"class","level-right"),u(g,"class","level"),u(m,"class","message-body"),u(t,"class","message is-danger"),u(a,"class","container"),u(e,"class","message-section")},m(s,r){f(s,e,r),v(e,a),v(a,t),v(t,m),v(m,g),v(g,E),v(E,$),v($,q),v($,y),v(y,D),v($,V),v(g,b),v(g,x),v(x,w),O&&O.m(w,null),v(w,S),v(w,k),v(k,j)},p(s,e){2&e&&p(D,s[1]),"latest"!==s[2].params.version?O?O.p(s,e):(O=I(s),O.c(),O.m(w,S)):O&&(O.d(1),O=null),4&e&&A!==(A=s[2].path)&&u(k,"href",A)},d(s){s&&d(e),O&&O.d()}}}function I(s){let e,a,t;return{c(){e=r("a"),a=l("Show latest instead"),this.h()},l(s){e=c(s,"A",{href:!0,class:!0});var t=o(e);a=i(t,"Show latest instead"),t.forEach(d),this.h()},h(){u(e,"href",t="latest/"+(s[0]||"")),u(e,"class","button is-text")},m(s,t){f(s,e,t),v(e,a)},p(s,a){1&a&&t!==(t="latest/"+(s[0]||""))&&u(e,"href",t)},d(s){s&&d(e)}}}function V(s){let e,a,t=s[2].query.requested&&s[2].query.requested!==s[1]&&D(s);const r=s[5].default,l=m(r,s,s[4],null);return{c(){t&&t.c(),e=n(),l&&l.c()},l(s){t&&t.l(s),e=h(s),l&&l.l(s)},m(s,r){t&&t.m(s,r),f(s,e,r),l&&l.m(s,r),a=!0},p(s,[a]){s[2].query.requested&&s[2].query.requested!==s[1]?t?t.p(s,a):(t=D(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),l&&l.p&&16&a&&g(l,r,s,s[4],a,null,null)},i(s){a||(E(l,s),a=!0)},o(s){$(l,s),a=!1},d(s){t&&t.d(s),s&&d(e),l&&l.d(s)}}}function b(e,a,t){let r,{$$slots:l={},$$scope:n}=a,{segment:c}=a;const{page:o}=q();let i;return y(e,o,s=>t(2,r=s)),e.$$set=s=>{"segment"in s&&t(0,c=s.segment),"$$scope"in s&&t(4,n=s.$$scope)},e.$$.update=()=>{4&e.$$.dirty&&t(1,i=function(e){const a=s.find(s=>s.tag===e);return a?a.version:e}(r.params.version))},[c,i,r,o,n,l]}export default class extends e{constructor(s){super(),a(this,s,b,V,t,{segment:0})}}
