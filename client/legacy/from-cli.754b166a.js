import{_ as t,a as s,b as a,c as r,i as n,d as e,S as c,s as o,e as i,f as u,g as f,h as l,t as h,j as v,k as d,l as p,m as g,n as m,o as y,p as E,r as R,u as $,v as w,w as b,x as D,y as k,z as x,A as I,B as S,C as T,D as N,E as V,F as j}from"./client.482987a6.js";function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s(t);if(r){var c=s(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return a(this,n)}}function A(t){var s,a,r,n,e,c,o,I,S,T,N,V,j,q,A;return s=new i({props:{title:"Redirecting...",description:"This should only take a few seconds"}}),{c:function(){u(s.$$.fragment),a=f(),r=l("section"),n=l("div"),e=l("div"),c=l("h1"),o=h("Redirecting..."),I=f(),S=l("p"),T=h("This should only take a few seconds"),N=f(),V=l("div"),j=l("a"),q=h("Jump to latests docs"),this.h()},l:function(t){v(s.$$.fragment,t),a=d(t),r=p(t,"SECTION",{class:!0});var i=g(r);n=p(i,"DIV",{class:!0});var u=g(n);e=p(u,"DIV",{class:!0});var f=g(e);c=p(f,"H1",{class:!0});var l=g(c);o=m(l,"Redirecting..."),l.forEach(y),I=d(f),S=p(f,"P",{class:!0});var h=g(S);T=m(h,"This should only take a few seconds"),h.forEach(y),N=d(f),V=p(f,"DIV",{class:!0});var E=g(V);j=p(E,"A",{href:!0,class:!0});var R=g(j);q=m(R,"Jump to latests docs"),R.forEach(y),E.forEach(y),f.forEach(y),u.forEach(y),i.forEach(y),this.h()},h:function(){E(c,"class","title"),E(S,"class","subtitle"),E(j,"href","latest"),E(j,"class","button is-link"),E(V,"class","buttons is-centered"),E(e,"class","container has-text-centered"),E(n,"class","hero-body"),E(r,"class","hero is-fullheight-with-navbar")},m:function(t,i){R(s,t,i),$(t,a,i),$(t,r,i),w(r,n),w(n,e),w(e,c),w(c,o),w(e,I),w(e,S),w(S,T),w(e,N),w(e,V),w(V,j),w(j,q),A=!0},p:b,i:function(t){A||(D(s.$$.fragment,t),A=!0)},o:function(t){k(s.$$.fragment,t),A=!1},d:function(t){x(s,t),t&&y(a),t&&y(r)}}}function C(t){var s=t.match(/^(.*)\.[0-9]+/)||[];return j(s,2)[1]||null}function J(t,s,a){var r,n=I().page;S(t,n,(function(t){return a(1,r=t)}));var e=T("index").tags;return N((function(){var t,s=r.query.version;function a(t){var a=t.version===s,r="/".concat(t.tag||"latest","/");a||(r+="?requested=".concat(s||"none")),V(r,{replaceState:a})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});var n=s;do{t=e.find((function(t){return t.version.startsWith(n)}))}while(!t&&(n=C(n)));return t?a(t):(console.error("No match for ".concat(s,", redirect to latest")),a({version:"invalid"}))})),[n]}var P=function(s){t(i,c);var a=q(i);function i(t){var s;return r(this,i),s=a.call(this),n(e(s),t,J,A,o,{}),s}return i}();export default P;
