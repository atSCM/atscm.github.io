import{_ as t,a as s,b as a,c as n,i as e,d as r,S as o,s as c,e as i,f as u,g as f,h as l,t as h,j as d,k as v,l as p,m,n as g,o as y,p as E,r as R,u as $,v as w,w as b,x as k,y as x,z as D,A as I,B as T,C as B,D as N,E as S,F as V}from"./client.dc9811d8.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=s(t);if(n){var o=s(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return a(this,e)}}function q(t){var s,a,n,e,r,o,c,I,T,B,N,S,V,j,q;return s=new i({props:{title:"Redirecting...",description:"This should only take a few seconds"}}),{c:function(){u(s.$$.fragment),a=f(),n=l("section"),e=l("div"),r=l("div"),o=l("h1"),c=h("Redirecting..."),I=f(),T=l("p"),B=h("This should only take a few seconds"),N=f(),S=l("div"),V=l("a"),j=h("Jump to latests docs"),this.h()},l:function(t){d(s.$$.fragment,t),a=v(t),n=p(t,"SECTION",{class:!0});var i=m(n);e=p(i,"DIV",{class:!0});var u=m(e);r=p(u,"DIV",{class:!0});var f=m(r);o=p(f,"H1",{class:!0});var l=m(o);c=g(l,"Redirecting..."),l.forEach(y),I=v(f),T=p(f,"P",{class:!0});var h=m(T);B=g(h,"This should only take a few seconds"),h.forEach(y),N=v(f),S=p(f,"DIV",{class:!0});var E=m(S);V=p(E,"A",{href:!0,class:!0});var R=m(V);j=g(R,"Jump to latests docs"),R.forEach(y),E.forEach(y),f.forEach(y),u.forEach(y),i.forEach(y),this.h()},h:function(){E(o,"class","title"),E(T,"class","subtitle"),E(V,"href","latest"),E(V,"class","button is-link"),E(S,"class","buttons is-centered"),E(r,"class","container has-text-centered"),E(e,"class","hero-body"),E(n,"class","hero is-fullheight-with-navbar")},m:function(t,i){R(s,t,i),$(t,a,i),$(t,n,i),w(n,e),w(e,r),w(r,o),w(o,c),w(r,I),w(r,T),w(T,B),w(r,N),w(r,S),w(S,V),w(V,j),q=!0},p:b,i:function(t){q||(k(s.$$.fragment,t),q=!0)},o:function(t){x(s.$$.fragment,t),q=!1},d:function(t){D(s,t),t&&y(a),t&&y(n)}}}function A(t){var s=t.match(/^(.*)\.[0-9]+/)||[];return V(s,2)[1]||null}function C(t,s,a){var n,e=I().page;T(t,e,(function(t){return a(1,n=t)}));var r=B("index").tags;return N((function(){var t,s=n.query.version;function a(t){var a=t.version===s,n="/".concat(t.tag||"latest","/");a||(n+="?requested=".concat(s||"none")),S(n,{replaceState:a})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});var e=s;do{t=r.find((function(t){return t.version.startsWith(e)}))}while(!t&&(e=A(e)));return t?a(t):(console.error("No match for ".concat(s,", redirect to latest")),a({version:"invalid"}))})),[e]}var J=function(s){t(i,o);var a=j(i);function i(t){var s;return n(this,i),s=a.call(this),e(r(s),t,C,q,c,{}),s}return i}();export default J;
