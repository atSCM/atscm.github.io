import{G as n,_ as s,a as t,b as a,c as e,i as r,d as c,S as o,s as i,h as u,t as l,g as f,l as h,m as d,n as v,o as p,k as m,p as g,u as y,v as $,H as E,I as q,F as I,J as b,x as D,y as V,A as x,B as R}from"./client.b93c0f16.js";function S(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=t(n);if(s){var c=t(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return a(this,e)}}function w(n){var s,t,a,e,r,c,o,i,q,I,b,D,V,x,R,S,w,A,B="latest"!==n[1].params.version&&k(n);return{c:function(){s=u("div"),t=u("div"),a=u("div"),e=u("div"),r=u("div"),c=u("div"),o=u("p"),i=l("The exact version you requested couldn't be found. Showing\n                "),q=u("em"),I=l(n[2]),b=l("\n                instead."),D=f(),V=u("div"),x=u("div"),B&&B.c(),R=f(),S=u("a"),w=l("Okay"),this.h()},l:function(u){s=h(u,"DIV",{class:!0});var l=d(s);t=h(l,"DIV",{class:!0});var f=d(t);a=h(f,"DIV",{class:!0});var g=d(a);e=h(g,"DIV",{class:!0});var y=d(e);r=h(y,"DIV",{class:!0});var $=d(r);c=h($,"DIV",{class:!0});var E=d(c);o=h(E,"P",{});var k=d(o);i=v(k,"The exact version you requested couldn't be found. Showing\n                "),q=h(k,"EM",{});var A=d(q);I=v(A,n[2]),A.forEach(p),b=v(k,"\n                instead."),k.forEach(p),E.forEach(p),D=m($),V=h($,"DIV",{class:!0});var O=d(V);x=h(O,"DIV",{class:!0});var P=d(x);B&&B.l(P),R=m(P),S=h(P,"A",{href:!0,class:!0,"sapper-noscroll":!0});var T=d(S);w=v(T,"Okay"),T.forEach(p),P.forEach(p),O.forEach(p),$.forEach(p),y.forEach(p),g.forEach(p),f.forEach(p),l.forEach(p),this.h()},h:function(){g(c,"class","level-left"),g(S,"href",A=n[1].path),g(S,"class","button is-danger is-light"),g(S,"sapper-noscroll",""),g(x,"class","buttons is-right"),g(V,"class","level-right"),g(r,"class","level"),g(e,"class","message-body"),g(a,"class","message is-danger"),g(t,"class","container"),g(s,"class","message-section")},m:function(n,u){y(n,s,u),$(s,t),$(t,a),$(a,e),$(e,r),$(r,c),$(c,o),$(o,i),$(o,q),$(q,I),$(o,b),$(r,D),$(r,V),$(V,x),B&&B.m(x,null),$(x,R),$(x,S),$(S,w)},p:function(n,s){4&s&&E(I,n[2]),"latest"!==n[1].params.version?B?B.p(n,s):((B=k(n)).c(),B.m(x,R)):B&&(B.d(1),B=null),2&s&&A!==(A=n[1].path)&&g(S,"href",A)},d:function(n){n&&p(s),B&&B.d()}}}function k(n){var s,t,a;return{c:function(){s=u("a"),t=l("Show latest instead"),this.h()},l:function(n){s=h(n,"A",{href:!0,class:!0});var a=d(s);t=v(a,"Show latest instead"),a.forEach(p),this.h()},h:function(){g(s,"href",a="latest/"+(n[0]||"")),g(s,"class","button is-text")},m:function(n,a){y(n,s,a),$(s,t)},p:function(n,t){1&t&&a!==(a="latest/"+(n[0]||""))&&g(s,"href",a)},d:function(n){n&&p(s)}}}function A(n){var s,t,a=n[1].query.requested&&n[1].query.requested!==n[2]&&w(n),e=n[5].default,r=q(e,n,n[4],null);return{c:function(){a&&a.c(),s=f(),r&&r.c()},l:function(n){a&&a.l(n),s=m(n),r&&r.l(n)},m:function(n,e){a&&a.m(n,e),y(n,s,e),r&&r.m(n,e),t=!0},p:function(n,t){var c=I(t,1)[0];n[1].query.requested&&n[1].query.requested!==n[2]?a?a.p(n,c):((a=w(n)).c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null),r&&r.p&&16&c&&b(r,e,n,n[4],c,null,null)},i:function(n){t||(D(r,n),t=!0)},o:function(n){V(r,n),t=!1},d:function(n){a&&a.d(n),n&&p(s),r&&r.d(n)}}}function B(s,t,a){var e,r,c=t.$$slots,o=void 0===c?{}:c,i=t.$$scope,u=t.segment,l=x().page;return R(s,l,(function(n){return a(1,r=n)})),s.$$set=function(n){"segment"in n&&a(0,u=n.segment),"$$scope"in n&&a(4,i=n.$$scope)},s.$$.update=function(){2&s.$$.dirty&&a(2,e=function(s){const t=n.find(n=>n.tag===s);return t?t.version:s}(r.params.version))},[u,r,e,l,i,o]}var O=function(n){s(a,o);var t=S(a);function a(n){var s;return e(this,a),s=t.call(this),r(c(s),n,B,A,i,{segment:0}),s}return a}();export default O;
