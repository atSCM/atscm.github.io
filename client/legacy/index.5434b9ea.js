import{K as t,L as n,_ as r,a as s,b as a,c as e,i as c,d as o,S as i,s as u,e as f,h as l,g as h,t as v,l as p,m as d,o as g,k as m,n as $,p as y,u as b,v as w,f as x,O as E,j as M,r as D,F as R,x as V,y as j,z as S,M as k,A as H,B as I}from"./client.2cf563cc.js";function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s(t);if(n){var c=s(this).constructor;r=Reflect.construct(e,arguments,c)}else r=e.apply(this,arguments);return a(this,r)}}function A(t,n,r){var s=t.slice();return s[3]=n[r],s}function P(t){var n,r,s,a,e,c,o,i,u=t[3].description+"";return{c:function(){n=l("div"),r=l("div"),s=h(),a=l("div"),e=l("a"),c=v("View"),i=h(),this.h()},l:function(t){n=p(t,"DIV",{class:!0});var o=d(n);r=p(o,"DIV",{class:!0}),d(r).forEach(g),s=m(o),a=p(o,"DIV",{class:!0});var u=d(a);e=p(u,"A",{class:!0,href:!0});var f=d(e);c=$(f,"View"),f.forEach(g),u.forEach(g),i=m(o),o.forEach(g),this.h()},h:function(){y(r,"class","content svelte-5eavl3"),y(e,"class","button is-link"),y(e,"href",o=t[1].params.version+"/docs/"+t[3].slug),y(a,"class","buttons is-right"),y(n,"class","box svelte-5eavl3")},m:function(t,o){b(t,n,o),w(n,r),r.innerHTML=u,w(n,s),w(n,a),w(a,e),w(e,c),w(n,i)},p:function(t,n){1&n&&u!==(u=t[3].description+"")&&(r.innerHTML=u),3&n&&o!==(o=t[1].params.version+"/docs/"+t[3].slug)&&y(e,"href",o)},d:function(t){t&&g(n)}}}function T(t){var n,r,s,a,e,c,o,i,u,H;n=new f({props:{title:"Manual",description:"Guides & tutorials"}});for(var I=t[0],L=[],T=0;T<I.length;T+=1)L[T]=P(A(t,I,T));return{c:function(){x(n.$$.fragment),r=h(),s=l("h1"),a=v("Manual"),e=h(),c=l("p"),o=v("Select one of the manuals below:"),i=h();for(var t=0;t<L.length;t+=1)L[t].c();u=E(),this.h()},l:function(t){M(n.$$.fragment,t),r=m(t),s=p(t,"H1",{class:!0});var f=d(s);a=$(f,"Manual"),f.forEach(g),e=m(t),c=p(t,"P",{class:!0});var l=d(c);o=$(l,"Select one of the manuals below:"),l.forEach(g),i=m(t);for(var h=0;h<L.length;h+=1)L[h].l(t);u=E(),this.h()},h:function(){y(s,"class","title"),y(c,"class","subtitle")},m:function(t,f){D(n,t,f),b(t,r,f),b(t,s,f),w(s,a),b(t,e,f),b(t,c,f),w(c,o),b(t,i,f);for(var l=0;l<L.length;l+=1)L[l].m(t,f);b(t,u,f),H=!0},p:function(t,n){var r=R(n,1)[0];if(3&r){var s;for(I=t[0],s=0;s<I.length;s+=1){var a=A(t,I,s);L[s]?L[s].p(a,r):(L[s]=P(a),L[s].c(),L[s].m(u.parentNode,u))}for(;s<L.length;s+=1)L[s].d(1);L.length=I.length}},i:function(t){H||(V(n.$$.fragment,t),H=!0)},o:function(t){j(n.$$.fragment,t),H=!1},d:function(t){S(n,t),t&&g(r),t&&g(s),t&&g(e),t&&g(c),t&&g(i),k(L,t),t&&g(u)}}}function z(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark((function t(r){var s,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r.params.version,t.next=3,this.fetch("".concat(s,"/docs/overview.json")).then((function(t){return t.json()}));case 3:return a=t.sent,t.abrupt("return",{topics:a});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function F(t,n,r){var s,a=n.topics,e=void 0===a?[]:a,c=H().page;return I(t,c,(function(t){return r(1,s=t)})),t.$$set=function(t){"topics"in t&&r(0,e=t.topics)},[e,s,c]}var G=function(t){r(s,i);var n=L(s);function s(t){var r;return e(this,s),r=n.call(this),c(o(r),t,F,T,u,{topics:0}),r}return s}();export default G;export{z as preload};
