import{_ as t,a as n,b as c,c as r,i as s,s as a,d as o,S as i,h as e,t as u,g as f,l,m as h,n as v,o as p,k as m,p as g,O as d,u as $,v as y,H as E,N as R,F as D,w as I,A as x,B as L,L as S,M as j,I as w,f as A,j as V,r as b,J as k,K as N,x as O,y as P,z as U}from"./c.client.4301b8ca.js";function z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var o=n(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return c(this,s)}}function B(t,n,c){var r=t.slice();return r[9]=n[c],r}function C(t,n,c){var r=t.slice();return r[6]=n[c],r[8]=c,r}function F(t){for(var n,c=t[6].sections,r=[],s=0;s<c.length;s+=1)r[s]=H(B(t,c,s));return{c:function(){n=e("ul");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l:function(t){n=l(t,"UL",{class:!0});for(var c=h(n),s=0;s<r.length;s+=1)r[s].l(c);c.forEach(p),this.h()},h:function(){g(n,"class","menu-list")},m:function(t,c){$(t,n,c);for(var s=0;s<r.length;s+=1)r[s].m(n,null)},p:function(t,s){if(17&s){var a;for(c=t[6].sections,a=0;a<c.length;a+=1){var o=B(t,c,a);r[a]?r[a].p(o,s):(r[a]=H(o),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=c.length}},d:function(t){t&&p(n),R(r,t)}}}function H(t){var n,c,r,s,a,o=t[9].title+"";return{c:function(){n=e("li"),c=e("a"),r=u(o),a=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);c=l(s,"A",{href:!0});var i=h(c);r=v(i,o),i.forEach(p),a=m(s),s.forEach(p),this.h()},h:function(){g(c,"href",s=t[4](t[6],t[9]))},m:function(t,s){$(t,n,s),y(n,c),y(c,r),y(n,a)},p:function(t,n){1&n&&o!==(o=t[9].title+"")&&E(r,o),1&n&&s!==(s=t[4](t[6],t[9]))&&g(c,"href",s)},d:function(t){t&&p(n)}}}function J(t){var n,c,r,s,a,o,i=t[6].title+"",R=t[1][t[8]]&&t[6].sections.length&&F(t);return{c:function(){n=e("li"),c=e("a"),r=u(i),a=f(),R&&R.c(),o=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);c=l(s,"A",{href:!0});var e=h(c);r=v(e,i),e.forEach(p),a=m(s),R&&R.l(s),o=m(s),s.forEach(p),this.h()},h:function(){g(c,"href",s=t[4](t[6])),d(c,"is-active",t[3](t[6]))},m:function(t,s){$(t,n,s),y(n,c),y(c,r),y(n,a),R&&R.m(n,null),y(n,o)},p:function(t,a){1&a&&i!==(i=t[6].title+"")&&E(r,i),1&a&&s!==(s=t[4](t[6]))&&g(c,"href",s),9&a&&d(c,"is-active",t[3](t[6])),t[1][t[8]]&&t[6].sections.length?R?R.p(t,a):((R=F(t)).c(),R.m(n,o)):R&&(R.d(1),R=null)},d:function(t){t&&p(n),R&&R.d()}}}function K(t){for(var n,c,r=t[0],s=[],a=0;a<r.length;a+=1)s[a]=J(C(t,r,a));return{c:function(){n=e("aside"),c=e("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){n=l(t,"ASIDE",{class:!0});var r=h(n);c=l(r,"UL",{class:!0});for(var a=h(c),o=0;o<s.length;o+=1)s[o].l(a);a.forEach(p),r.forEach(p),this.h()},h:function(){g(c,"class","menu-list"),g(n,"class","menu")},m:function(t,r){$(t,n,r),y(n,c);for(var a=0;a<s.length;a+=1)s[a].m(c,null)},p:function(t,n){var a=D(n,1)[0];if(27&a){var o;for(r=t[0],o=0;o<r.length;o+=1){var i=C(t,r,o);s[o]?s[o].p(i,a):(s[o]=J(i),s[o].c(),s[o].m(c,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},i:I,o:I,d:function(t){t&&p(n),R(s,t)}}}function M(t,n,c){var r,s=n.topics,a=x().page;L(t,a,(function(t){return c(5,r=t)}));var o,i=function(t){return r.params.manual===t.slug};return t.$set=function(t){"topics"in t&&c(0,s=t.topics)},t.$$.update=function(){1&t.$$.dirty&&c(1,o=s.map((function(t){return i(t)})))},[s,o,a,i,function(t,n){return"".concat(r.params.version,"/docs/").concat(t.slug).concat(n?"/#".concat(n.slug):"")}]}var T=function(n){t(e,i);var c=z(e);function e(t){var n;return r(this,e),n=c.call(this),s(o(n),t,M,K,a,{topics:0}),n}return e}();function _(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var o=n(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return c(this,s)}}function q(t){var n,c,r,s,a,o,i,u=t[2].default,v=w(u,t,t[1],null),d=new T({props:{topics:t[0]}});return{c:function(){n=e("section"),c=e("div"),r=e("div"),s=e("div"),v&&v.c(),a=f(),o=e("div"),A(d.$$.fragment),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var i=h(n);c=l(i,"DIV",{class:!0});var e=h(c);r=l(e,"DIV",{class:!0});var u=h(r);s=l(u,"DIV",{class:!0});var f=h(s);v&&v.l(f),f.forEach(p),a=m(u),o=l(u,"DIV",{class:!0});var g=h(o);V(d.$$.fragment,g),g.forEach(p),u.forEach(p),e.forEach(p),i.forEach(p),this.h()},h:function(){g(s,"class","column"),g(o,"class","column is-3"),g(r,"class","columns"),g(c,"class","container"),g(n,"class","section")},m:function(t,e){$(t,n,e),y(n,c),y(c,r),y(r,s),v&&v.m(s,null),y(r,a),y(r,o),b(d,o,null),i=!0},p:function(t,n){var c=D(n,1)[0];v&&v.p&&2&c&&v.p(k(u,t,t[1],null),N(u,t[1],c,null));var r={};1&c&&(r.topics=t[0]),d.$set(r)},i:function(t){i||(O(v,t),O(d.$$.fragment,t),i=!0)},o:function(t){P(v,t),P(d.$$.fragment,t),i=!1},d:function(t){t&&p(n),v&&v.d(t),U(d)}}}function G(t){return Q.apply(this,arguments)}function Q(){return(Q=S(j.mark((function t(n){var c,r;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.params.version,t.next=3,this.fetch("".concat(c,"/docs/toc.json")).then((function(t){return t.json()}));case 3:return r=t.sent,t.abrupt("return",{topics:r});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function W(t,n,c){var r=n.topics,s=n.$$slots,a=void 0===s?{}:s,o=n.$$scope;return t.$set=function(t){"topics"in t&&c(0,r=t.topics),"$$scope"in t&&c(1,o=t.$$scope)},[r,o,a]}var X=function(n){t(e,i);var c=_(e);function e(t){var n;return r(this,e),n=c.call(this),s(o(n),t,W,q,a,{topics:0}),n}return e}();export default X;export{G as preload};
