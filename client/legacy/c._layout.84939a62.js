import{_ as t,a as n,b as c,c as r,i as s,s as o,d as a,S as i,h as e,t as u,g as f,l,m as h,n as v,o as p,k as m,p as d,N as g,u as $,v as y,H as E,M as R,F as D,w as I,A as x,B as L,K as S,L as j,I as w,f as A,j as V,r as b,J as k,x as N,y as P,z as U}from"./c.client.9df4773c.js";function z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(r){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return c(this,s)}}function B(t,n,c){var r=t.slice();return r[9]=n[c],r}function C(t,n,c){var r=t.slice();return r[6]=n[c],r[8]=c,r}function F(t){for(var n,c=t[6].sections,r=[],s=0;s<c.length;s+=1)r[s]=H(B(t,c,s));return{c:function(){n=e("ul");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l:function(t){n=l(t,"UL",{class:!0});for(var c=h(n),s=0;s<r.length;s+=1)r[s].l(c);c.forEach(p),this.h()},h:function(){d(n,"class","menu-list")},m:function(t,c){$(t,n,c);for(var s=0;s<r.length;s+=1)r[s].m(n,null)},p:function(t,s){if(17&s){var o;for(c=t[6].sections,o=0;o<c.length;o+=1){var a=B(t,c,o);r[o]?r[o].p(a,s):(r[o]=H(a),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=c.length}},d:function(t){t&&p(n),R(r,t)}}}function H(t){var n,c,r,s,o,a=t[9].title+"";return{c:function(){n=e("li"),c=e("a"),r=u(a),o=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);c=l(s,"A",{href:!0});var i=h(c);r=v(i,a),i.forEach(p),o=m(s),s.forEach(p),this.h()},h:function(){d(c,"href",s=t[4](t[6],t[9]))},m:function(t,s){$(t,n,s),y(n,c),y(c,r),y(n,o)},p:function(t,n){1&n&&a!==(a=t[9].title+"")&&E(r,a),1&n&&s!==(s=t[4](t[6],t[9]))&&d(c,"href",s)},d:function(t){t&&p(n)}}}function J(t){var n,c,r,s,o,a,i=t[6].title+"",R=t[1][t[8]]&&t[6].sections.length&&F(t);return{c:function(){n=e("li"),c=e("a"),r=u(i),o=f(),R&&R.c(),a=f(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);c=l(s,"A",{href:!0});var e=h(c);r=v(e,i),e.forEach(p),o=m(s),R&&R.l(s),a=m(s),s.forEach(p),this.h()},h:function(){d(c,"href",s=t[4](t[6])),g(c,"is-active",t[3](t[6]))},m:function(t,s){$(t,n,s),y(n,c),y(c,r),y(n,o),R&&R.m(n,null),y(n,a)},p:function(t,o){1&o&&i!==(i=t[6].title+"")&&E(r,i),1&o&&s!==(s=t[4](t[6]))&&d(c,"href",s),9&o&&g(c,"is-active",t[3](t[6])),t[1][t[8]]&&t[6].sections.length?R?R.p(t,o):((R=F(t)).c(),R.m(n,a)):R&&(R.d(1),R=null)},d:function(t){t&&p(n),R&&R.d()}}}function K(t){for(var n,c,r=t[0],s=[],o=0;o<r.length;o+=1)s[o]=J(C(t,r,o));return{c:function(){n=e("aside"),c=e("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){n=l(t,"ASIDE",{class:!0});var r=h(n);c=l(r,"UL",{class:!0});for(var o=h(c),a=0;a<s.length;a+=1)s[a].l(o);o.forEach(p),r.forEach(p),this.h()},h:function(){d(c,"class","menu-list"),d(n,"class","menu")},m:function(t,r){$(t,n,r),y(n,c);for(var o=0;o<s.length;o+=1)s[o].m(c,null)},p:function(t,n){var o=D(n,1)[0];if(27&o){var a;for(r=t[0],a=0;a<r.length;a+=1){var i=C(t,r,a);s[a]?s[a].p(i,o):(s[a]=J(i),s[a].c(),s[a].m(c,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:I,o:I,d:function(t){t&&p(n),R(s,t)}}}function M(t,n,c){var r,s=n.topics,o=x().page;L(t,o,(function(t){return c(5,r=t)}));var a,i=function(t){return r.params.manual===t.slug};return t.$$set=function(t){"topics"in t&&c(0,s=t.topics)},t.$$.update=function(){1&t.$$.dirty&&c(1,a=s.map((function(t){return i(t)})))},[s,a,o,i,function(t,n){return"".concat(r.params.version,"/docs/").concat(t.slug).concat(n?"/#".concat(n.slug):"")}]}var O=function(n){t(e,i);var c=z(e);function e(t){var n;return r(this,e),n=c.call(this),s(a(n),t,M,K,o,{topics:0}),n}return e}();function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(r){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return c(this,s)}}function _(t){var n,c,r,s,o,a,i,u,v=t[2].default,g=w(v,t,t[1],null);return i=new O({props:{topics:t[0]}}),{c:function(){n=e("section"),c=e("div"),r=e("div"),s=e("div"),g&&g.c(),o=f(),a=e("div"),A(i.$$.fragment),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var e=h(n);c=l(e,"DIV",{class:!0});var u=h(c);r=l(u,"DIV",{class:!0});var f=h(r);s=l(f,"DIV",{class:!0});var v=h(s);g&&g.l(v),v.forEach(p),o=m(f),a=l(f,"DIV",{class:!0});var d=h(a);V(i.$$.fragment,d),d.forEach(p),f.forEach(p),u.forEach(p),e.forEach(p),this.h()},h:function(){d(s,"class","column"),d(a,"class","column is-3"),d(r,"class","columns"),d(c,"class","container"),d(n,"class","section")},m:function(t,e){$(t,n,e),y(n,c),y(c,r),y(r,s),g&&g.m(s,null),y(r,o),y(r,a),b(i,a,null),u=!0},p:function(t,n){var c=D(n,1)[0];g&&g.p&&2&c&&k(g,v,t,t[1],c,null,null);var r={};1&c&&(r.topics=t[0]),i.$set(r)},i:function(t){u||(N(g,t),N(i.$$.fragment,t),u=!0)},o:function(t){P(g,t),P(i.$$.fragment,t),u=!1},d:function(t){t&&p(n),g&&g.d(t),U(i)}}}function q(t){return G.apply(this,arguments)}function G(){return(G=S(j.mark((function t(n){var c,r;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.params.version,t.next=3,this.fetch("".concat(c,"/docs/toc.json")).then((function(t){return t.json()}));case 3:return r=t.sent,t.abrupt("return",{topics:r});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Q(t,n,c){var r=n.$$slots,s=void 0===r?{}:r,o=n.$$scope,a=n.topics;return t.$$set=function(t){"topics"in t&&c(0,a=t.topics),"$$scope"in t&&c(1,o=t.$$scope)},[a,o,s]}var W=function(n){t(e,i);var c=T(e);function e(t){var n;return r(this,e),n=c.call(this),s(a(n),t,Q,_,o,{topics:0}),n}return e}();export default W;export{q as preload};
