import{_ as t,a as n,b as r,c,i as s,s as o,d as a,S as i,h as e,t as u,g as f,l,m as h,n as v,o as p,k as m,p as g,N as d,u as $,v as y,H as E,M as R,F as D,w as I,A as x,B as L,K as S,L as j,I as w,f as A,j as V,r as b,J as k,x as N,y as P,z as U}from"./c.client.fe10142e.js";function z(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(c){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return r(this,s)}}function B(t,n,r){var c=t.slice();return c[6]=n[r],c[8]=r,c}function C(t,n,r){var c=t.slice();return c[9]=n[r],c}function F(t){for(var n,r=t[6].sections,c=[],s=0;s<r.length;s+=1)c[s]=H(C(t,r,s));return{c:function(){n=e("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){n=l(t,"UL",{class:!0});for(var r=h(n),s=0;s<c.length;s+=1)c[s].l(r);r.forEach(p),this.h()},h:function(){g(n,"class","menu-list")},m:function(t,r){$(t,n,r);for(var s=0;s<c.length;s+=1)c[s].m(n,null)},p:function(t,s){if(17&s){var o;for(r=t[6].sections,o=0;o<r.length;o+=1){var a=C(t,r,o);c[o]?c[o].p(a,s):(c[o]=H(a),c[o].c(),c[o].m(n,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},d:function(t){t&&p(n),R(c,t)}}}function H(t){var n,r,c,s,o,a=t[9].title+"";return{c:function(){n=e("li"),r=e("a"),c=u(a),o=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);r=l(s,"A",{href:!0});var i=h(r);c=v(i,a),i.forEach(p),o=m(s),s.forEach(p),this.h()},h:function(){g(r,"href",s=t[4](t[6],t[9]))},m:function(t,s){$(t,n,s),y(n,r),y(r,c),y(n,o)},p:function(t,n){1&n&&a!==(a=t[9].title+"")&&E(c,a),1&n&&s!==(s=t[4](t[6],t[9]))&&g(r,"href",s)},d:function(t){t&&p(n)}}}function J(t){var n,r,c,s,o,a,i=t[6].title+"",R=t[1][t[8]]&&t[6].sections.length&&F(t);return{c:function(){n=e("li"),r=e("a"),c=u(i),o=f(),R&&R.c(),a=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);r=l(s,"A",{href:!0});var e=h(r);c=v(e,i),e.forEach(p),o=m(s),R&&R.l(s),a=m(s),s.forEach(p),this.h()},h:function(){g(r,"href",s=t[4](t[6])),d(r,"is-active",t[3](t[6]))},m:function(t,s){$(t,n,s),y(n,r),y(r,c),y(n,o),R&&R.m(n,null),y(n,a)},p:function(t,o){1&o&&i!==(i=t[6].title+"")&&E(c,i),1&o&&s!==(s=t[4](t[6]))&&g(r,"href",s),9&o&&d(r,"is-active",t[3](t[6])),t[1][t[8]]&&t[6].sections.length?R?R.p(t,o):((R=F(t)).c(),R.m(n,a)):R&&(R.d(1),R=null)},d:function(t){t&&p(n),R&&R.d()}}}function K(t){for(var n,r,c=t[0],s=[],o=0;o<c.length;o+=1)s[o]=J(B(t,c,o));return{c:function(){n=e("aside"),r=e("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){n=l(t,"ASIDE",{class:!0});var c=h(n);r=l(c,"UL",{class:!0});for(var o=h(r),a=0;a<s.length;a+=1)s[a].l(o);o.forEach(p),c.forEach(p),this.h()},h:function(){g(r,"class","menu-list"),g(n,"class","menu")},m:function(t,c){$(t,n,c),y(n,r);for(var o=0;o<s.length;o+=1)s[o].m(r,null)},p:function(t,n){var o=D(n,1)[0];if(27&o){var a;for(c=t[0],a=0;a<c.length;a+=1){var i=B(t,c,a);s[a]?s[a].p(i,o):(s[a]=J(i),s[a].c(),s[a].m(r,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=c.length}},i:I,o:I,d:function(t){t&&p(n),R(s,t)}}}function M(t,n,r){var c,s,o=n.topics,a=x().page;L(t,a,(function(t){return r(5,s=t)}));var i=function(t){return s.params.manual===t.slug};return t.$$set=function(t){"topics"in t&&r(0,o=t.topics)},t.$$.update=function(){1&t.$$.dirty&&r(1,c=o.map((function(t){return i(t)})))},[o,c,a,i,function(t,n){return"".concat(s.params.version,"/docs/").concat(t.slug).concat(n?"/#".concat(n.slug):"")}]}var O=function(n){t(e,i);var r=z(e);function e(t){var n;return c(this,e),n=r.call(this),s(a(n),t,M,K,o,{topics:0}),n}return e}();function T(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(c){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return r(this,s)}}function _(t){var n,r,c,s,o,a,i,u,v=t[2].default,d=w(v,t,t[1],null);return i=new O({props:{topics:t[0]}}),{c:function(){n=e("section"),r=e("div"),c=e("div"),s=e("div"),d&&d.c(),o=f(),a=e("div"),A(i.$$.fragment),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var e=h(n);r=l(e,"DIV",{class:!0});var u=h(r);c=l(u,"DIV",{class:!0});var f=h(c);s=l(f,"DIV",{class:!0});var v=h(s);d&&d.l(v),v.forEach(p),o=m(f),a=l(f,"DIV",{class:!0});var g=h(a);V(i.$$.fragment,g),g.forEach(p),f.forEach(p),u.forEach(p),e.forEach(p),this.h()},h:function(){g(s,"class","column"),g(a,"class","column is-3"),g(c,"class","columns"),g(r,"class","container"),g(n,"class","section")},m:function(t,e){$(t,n,e),y(n,r),y(r,c),y(c,s),d&&d.m(s,null),y(c,o),y(c,a),b(i,a,null),u=!0},p:function(t,n){var r=D(n,1)[0];d&&d.p&&2&r&&k(d,v,t,t[1],r,null,null);var c={};1&r&&(c.topics=t[0]),i.$set(c)},i:function(t){u||(N(d,t),N(i.$$.fragment,t),u=!0)},o:function(t){P(d,t),P(i.$$.fragment,t),u=!1},d:function(t){t&&p(n),d&&d.d(t),U(i)}}}function q(t){return G.apply(this,arguments)}function G(){return(G=S(j.mark((function t(n){var r,c;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params.version,t.next=3,this.fetch("".concat(r,"/docs/toc.json")).then((function(t){return t.json()}));case 3:return c=t.sent,t.abrupt("return",{topics:c});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Q(t,n,r){var c=n.$$slots,s=void 0===c?{}:c,o=n.$$scope,a=n.topics;return t.$$set=function(t){"topics"in t&&r(0,a=t.topics),"$$scope"in t&&r(1,o=t.$$scope)},[a,o,s]}var W=function(n){t(e,i);var r=T(e);function e(t){var n;return c(this,e),n=r.call(this),s(a(n),t,Q,_,o,{topics:0}),n}return e}();export default W;export{q as preload};
