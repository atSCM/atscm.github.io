import{K as t,L as n,G as r,_ as a,a as e,b as s,c,i as o,s as i,d as u,S as f,e as l,h,t as v,g as m,l as p,m as d,n as g,o as E,k as y,p as $,u as D,v as I,H as b,f as x,j as w,r as L,F as R,x as V,y as j,z as k,M as A,A as M,B as H}from"./c.client.ce925e4b.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function P(t,n,r){var a=t.slice();return a[3]=n[r],a}function T(t){var n,r,a,e,s,c=t[3].title+"";return{c:function(){n=h("li"),r=h("a"),a=v(c),s=m(),this.h()},l:function(t){n=p(t,"LI",{});var e=d(n);r=p(e,"A",{href:!0});var o=d(r);a=g(o,c),o.forEach(E),s=y(e),e.forEach(E),this.h()},h:function(){$(r,"href",e=t[1].path+"#"+t[3].slug)},m:function(t,e){D(t,n,e),I(n,r),I(r,a),I(n,s)},p:function(t,n){1&n&&c!==(c=t[3].title+"")&&b(a,c),3&n&&e!==(e=t[1].path+"#"+t[3].slug)&&$(r,"href",e)},d:function(t){t&&E(n)}}}function U(t){var n,r,a,e,s,c,o,i,u,f,M,H,S,U,z,B=t[0].content+"",F=t[0].title+"";n=new l({props:{title:"Readme",description:"Learn how to get started with atscm"}});for(var G=t[0].sections,K=[],N=0;N<G.length;N+=1)K[N]=T(P(t,G,N));return{c:function(){x(n.$$.fragment),r=m(),a=h("div"),e=h("div"),s=h("div"),c=h("main"),o=h("div"),i=m(),u=h("div"),f=h("aside"),M=h("p"),H=v(F),S=m(),U=h("ul");for(var t=0;t<K.length;t+=1)K[t].c();this.h()},l:function(t){w(n.$$.fragment,t),r=y(t),a=p(t,"DIV",{class:!0});var l=d(a);e=p(l,"DIV",{class:!0});var h=d(e);s=p(h,"DIV",{class:!0});var v=d(s);c=p(v,"MAIN",{class:!0});var m=d(c);o=p(m,"DIV",{class:!0}),d(o).forEach(E),m.forEach(E),i=y(v),u=p(v,"DIV",{class:!0});var $=d(u);f=p($,"ASIDE",{class:!0});var D=d(f);M=p(D,"P",{class:!0});var I=d(M);H=g(I,F),I.forEach(E),S=y(D),U=p(D,"UL",{class:!0});for(var b=d(U),x=0;x<K.length;x+=1)K[x].l(b);b.forEach(E),D.forEach(E),$.forEach(E),v.forEach(E),h.forEach(E),l.forEach(E),this.h()},h:function(){$(o,"class","content"),$(c,"class","column"),$(M,"class","menu-label"),$(U,"class","menu-list"),$(f,"class","menu"),$(u,"class","column is-3 is-hidden-mobile"),$(s,"class","columns"),$(e,"class","container"),$(a,"class","section")},m:function(t,l){L(n,t,l),D(t,r,l),D(t,a,l),I(a,e),I(e,s),I(s,c),I(c,o),o.innerHTML=B,I(s,i),I(s,u),I(u,f),I(f,M),I(M,H),I(f,S),I(f,U);for(var h=0;h<K.length;h+=1)K[h].m(U,null);z=!0},p:function(t,n){var r=R(n,1)[0];if((!z||1&r)&&B!==(B=t[0].content+"")&&(o.innerHTML=B),(!z||1&r)&&F!==(F=t[0].title+"")&&b(H,F),3&r){var a;for(G=t[0].sections,a=0;a<G.length;a+=1){var e=P(t,G,a);K[a]?K[a].p(e,r):(K[a]=T(e),K[a].c(),K[a].m(U,null))}for(;a<K.length;a+=1)K[a].d(1);K.length=G.length}},i:function(t){z||(V(n.$$.fragment,t),z=!0)},o:function(t){j(n.$$.fragment,t),z=!1},d:function(t){k(n,t),t&&E(r),t&&E(a),A(K,t)}}}function z(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark((function t(a){var e,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.params.version,r.find((function(t){return t.tag===e}))){t.next=3;break}return t.abrupt("return",this.error(404,"Unknown release tag '".concat(e,"'")));case 3:return t.next=5,this.fetch("".concat(e,"/readme.json")).then((function(t){return t.json()}));case 5:return s=t.sent,t.abrupt("return",{readme:s});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function F(t,n,r){var a,e=n.readme,s=M().page;return H(t,s,(function(t){return r(1,a=t)})),t.$set=function(t){"readme"in t&&r(0,e=t.readme)},[e,a,s]}var G=function(t){a(r,f);var n=S(r);function r(t){var a;return c(this,r),a=n.call(this),o(u(a),t,F,U,i,{readme:0}),a}return r}();export default G;export{z as preload};
