import{_ as t,a as s,b as a,c as r,i as n,s as e,d as c,S as o,e as i,f,g as u,h as l,t as h,j as v,k as d,l as p,m as g,n as m,o as y,p as E,r as R,u as $,v as w,w as b,x as D,y as k,z as x,A as I,B as S,C as T,D as N,E as V,F as j}from"./c.client.44f07109.js";function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s(t);if(r){var c=s(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return a(this,n)}}function A(t){var s,a,r,n,e,c,o,I,S,T,N,V,j,q,A=new i({props:{title:"Redirecting...",description:"This should only take a few seconds"}});return{c:function(){f(A.$$.fragment),s=u(),a=l("section"),r=l("div"),n=l("div"),e=l("h1"),c=h("Redirecting..."),o=u(),I=l("p"),S=h("This should only take a few seconds"),T=u(),N=l("div"),V=l("a"),j=h("Jump to latests docs"),this.h()},l:function(t){v(A.$$.fragment,t),s=d(t),a=p(t,"SECTION",{class:!0});var i=g(a);r=p(i,"DIV",{class:!0});var f=g(r);n=p(f,"DIV",{class:!0});var u=g(n);e=p(u,"H1",{class:!0});var l=g(e);c=m(l,"Redirecting..."),l.forEach(y),o=d(u),I=p(u,"P",{class:!0});var h=g(I);S=m(h,"This should only take a few seconds"),h.forEach(y),T=d(u),N=p(u,"DIV",{class:!0});var E=g(N);V=p(E,"A",{href:!0,class:!0});var R=g(V);j=m(R,"Jump to latests docs"),R.forEach(y),E.forEach(y),u.forEach(y),f.forEach(y),i.forEach(y),this.h()},h:function(){E(e,"class","title"),E(I,"class","subtitle"),E(V,"href","latest"),E(V,"class","button is-link"),E(N,"class","buttons is-centered"),E(n,"class","container has-text-centered"),E(r,"class","hero-body"),E(a,"class","hero is-fullheight-with-navbar")},m:function(t,i){R(A,t,i),$(t,s,i),$(t,a,i),w(a,r),w(r,n),w(n,e),w(e,c),w(n,o),w(n,I),w(I,S),w(n,T),w(n,N),w(N,V),w(V,j),q=!0},p:b,i:function(t){q||(D(A.$$.fragment,t),q=!0)},o:function(t){k(A.$$.fragment,t),q=!1},d:function(t){x(A,t),t&&y(s),t&&y(a)}}}function C(t){var s=t.match(/^(.*)\.[0-9]+/)||[];return j(s,2)[1]||null}function J(t,s,a){var r,n=I().page;S(t,n,(function(t){return a(1,r=t)}));var e=T("index").tags;return N((function(){var t,s=r.query.version;function a(t){var a=t.version===s,r="/".concat(t.tag||"latest","/");a||(r+="?requested=".concat(s||"none")),V(r,{replaceState:a})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});var n=s;do{t=e.find((function(t){return t.version.startsWith(n)}))}while(!t&&(n=C(n)));return t?a(t):(console.error("No match for ".concat(s,", redirect to latest")),a({version:"invalid"}))})),[n]}var P=function(s){t(i,o);var a=q(i);function i(t){var s;return r(this,i),s=a.call(this),n(c(s),t,J,A,e,{}),s}return i}();export default P;
