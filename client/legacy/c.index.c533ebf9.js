import{_ as n,a as t,b as r,c,i as a,s as i,d as e,S as o,I as s,h as u,l as f,m as l,o as h,p as v,u as m,J as p,x as d,P as g,Q as E,y as $,g as y,k as b,v as k,R as D,T as I,F as R,U as x,V as P,W as w,t as A,n as V,H as L,N as S,M as T,X as H,Y as N,w as _,K as M,L as O,e as j,f as J,j as q,r as B,z as U,Z as G,A as z,B as C,$ as F}from"./c.client.768313ee.js";function K(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}var Q=function(n){return{open:2&n}},W=function(n){return{open:n[1]}};function X(n){var t,r,c,a=n[3].default,i=s(a,n,n[2],null);return{c:function(){t=u("div"),i&&i.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var r=l(t);i&&i.l(r),r.forEach(h),this.h()},h:function(){v(t,"class","details-content svelte-1p261ik")},m:function(n,r){m(n,t,r),i&&i.m(t,null),c=!0},p:function(n,t){i&&i.p&&4&t&&p(i,a,n,n[2],t,null,null)},i:function(n){c||(d(i,n),n&&g((function(){r||(r=E(t,w,{},!0)),r.run(1)})),c=!0)},o:function(n){$(i,n),n&&(r||(r=E(t,w,{},!1)),r.run(0)),c=!1},d:function(n){n&&h(t),i&&i.d(n),n&&r&&r.end()}}}function Y(n){var t,r,c,a,i,e,o=n[3].summary,g=s(o,n,n[2],W),E=g||function(n){var t;return{c:function(){t=A(n[0])},l:function(r){t=V(r,n[0])},m:function(n,r){m(n,t,r)},p:function(n,r){1&r&&L(t,n[0])},d:function(n){n&&h(t)}}}(n),w=n[1]&&X(n);return{c:function(){t=u("div"),r=u("p"),E&&E.c(),c=y(),w&&w.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"P",{class:!0});var i=l(r);E&&E.l(i),i.forEach(h),c=b(a),w&&w.l(a),a.forEach(h),this.h()},h:function(){v(r,"class","button summary"),v(t,"class","details")},m:function(o,s){m(o,t,s),k(t,r),E&&E.m(r,null),k(t,c),w&&w.m(t,null),a=!0,i||(e=D(r,"click",I(n[4])),i=!0)},p:function(n,r){var c=R(r,1)[0];g?g.p&&6&c&&p(g,o,n,n[2],c,Q,W):E&&E.p&&1&c&&E.p(n,c),n[1]?w?(w.p(n,c),2&c&&d(w,1)):((w=X(n)).c(),d(w,1),w.m(t,null)):w&&(x(),$(w,1,1,(function(){w=null})),P())},i:function(n){a||(d(E,n),d(w),a=!0)},o:function(n){$(E,n),$(w),a=!1},d:function(n){n&&h(t),E&&E.d(n),w&&w.d(),i=!1,e()}}}function Z(n,t,r){var c=t.summary,a=!0,i=t.$$slots,e=void 0===i?{}:i,o=t.$$scope;return n.$set=function(n){"summary"in n&&r(0,c=n.summary),"$$scope"in n&&r(2,o=n.$$scope)},[c,a,o,e,function(){return r(1,a=!a)}]}var nn=function(t){n(s,o);var r=K(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,Z,Y,i,{summary:0}),t}return s}();function tn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}function rn(n,t,r){var c=n.slice();return c[6]=t[r],c}function cn(n,t,r){var c=n.slice();return c[2]=t[r].items,c[3]=t[r].dirname,c}function an(n){var t,r,c,a,i,e,o,s,p,d,g,E=n[6].kind.slice(0,1)+"",$=n[6].name+"";return{c:function(){t=u("li"),r=u("a"),c=u("span"),a=A(E),i=y(),e=u("span"),o=y(),s=u("span"),p=A(" "),d=A($),this.h()},l:function(n){t=f(n,"LI",{});var u=l(t);r=f(u,"A",{href:!0,class:!0});var v=l(r);c=f(v,"SPAN",{class:!0});var m=l(c);a=V(m,E),m.forEach(h),i=b(v),e=f(v,"SPAN",{class:!0}),l(e).forEach(h),o=b(v),s=f(v,"SPAN",{});var g=l(s);p=V(g," "),d=V(g,$),g.forEach(h),v.forEach(h),u.forEach(h),this.h()},h:function(){v(c,"class","tag"),S(c,"is-success","class"===n[6].kind),S(c,"is-link","variable"===n[6].kind),S(c,"is-warning","function"===n[6].kind),v(e,"class","space svelte-vxblqn"),v(r,"href",g=n[0](n[6])),v(r,"class","svelte-vxblqn")},m:function(n,u){m(n,t,u),k(t,r),k(r,c),k(c,a),k(r,i),k(r,e),k(r,o),k(r,s),k(s,p),k(s,d)},p:function(n,t){2&t&&E!==(E=n[6].kind.slice(0,1)+"")&&L(a,E),2&t&&S(c,"is-success","class"===n[6].kind),2&t&&S(c,"is-link","variable"===n[6].kind),2&t&&S(c,"is-warning","function"===n[6].kind),2&t&&$!==($=n[6].name+"")&&L(d,$),3&t&&g!==(g=n[0](n[6]))&&v(r,"href",g)},d:function(n){n&&h(t)}}}function en(n,t){for(var r,c,a,i,e,o=t[3]+"",s=t[2],p=[],d=0;d<s.length;d+=1)p[d]=an(rn(t,s,d));return{key:n,first:null,c:function(){r=u("p"),c=A(o),a=y(),i=u("ul");for(var n=0;n<p.length;n+=1)p[n].c();e=y(),this.h()},l:function(n){r=f(n,"P",{class:!0});var t=l(r);c=V(t,o),t.forEach(h),a=b(n),i=f(n,"UL",{class:!0});for(var s=l(i),u=0;u<p.length;u+=1)p[u].l(s);e=b(s),s.forEach(h),this.h()},h:function(){v(r,"class","menu-label"),v(i,"class","menu-list svelte-vxblqn"),this.first=r},m:function(n,t){m(n,r,t),k(r,c),m(n,a,t),m(n,i,t);for(var o=0;o<p.length;o+=1)p[o].m(i,null);k(i,e)},p:function(n,t){if(2&t&&o!==(o=n[3]+"")&&L(c,o),3&t){var r;for(s=n[2],r=0;r<s.length;r+=1){var a=rn(n,s,r);p[r]?p[r].p(a,t):(p[r]=an(a),p[r].c(),p[r].m(i,e))}for(;r<p.length;r+=1)p[r].d(1);p.length=s.length}},d:function(n){n&&h(r),n&&h(a),n&&h(i),T(p,n)}}}function on(n){for(var t,r=[],c=new Map,a=n[1],i=function(n){return n[3]},e=0;e<a.length;e+=1){var o=cn(n,a,e),s=i(o);c.set(s,r[e]=en(s,o))}return{c:function(){t=u("aside");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=f(n,"ASIDE",{class:!0});for(var c=l(t),a=0;a<r.length;a+=1)r[a].l(c);c.forEach(h),this.h()},h:function(){v(t,"class","menu toc")},m:function(n,c){m(n,t,c);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p:function(n,a){var e=R(a,1)[0];if(3&e){var o=n[1];r=H(r,e,i,1,n,o,c,t,N,en,null,cn)}},i:_,o:_,d:function(n){n&&h(t);for(var c=0;c<r.length;c+=1)r[c].d()}}}function sn(n,t,r){var c=t.apiLink,a=t.folders,i=void 0===a?[]:a;return n.$set=function(n){"apiLink"in n&&r(0,c=n.apiLink),"folders"in n&&r(1,i=n.folders)},[c,i]}var un=function(t){n(s,o);var r=tn(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,sn,on,i,{apiLink:0,folders:1}),t}return s}();function fn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}var ln=F.Map;function hn(n,t,r){var c=n.slice();return c[12]=t[r],c}function vn(n,t,r){var c=n.slice();return c[9]=t[r],c}function mn(n,t,r){var c=n.slice();return c[9]=t[r],c}function pn(n,t,r){var c=n.slice();return c[16]=t[r].items,c[17]=t[r].dirname,c}function dn(n){var t,r,c=n[9].name+"";return{c:function(){t=u("option"),r=A(c),this.h()},l:function(n){t=f(n,"OPTION",{value:!0});var a=l(t);r=V(a,c),a.forEach(h),this.h()},h:function(){t.__value=n[6](n[9]),t.value=t.__value},m:function(n,c){m(n,t,c),k(t,r)},p:_,d:function(n){n&&h(t)}}}function gn(n,t){for(var r,c=t[16],a=[],i=0;i<c.length;i+=1)a[i]=dn(mn(t,c,i));return{key:n,first:null,c:function(){r=u("optgroup");for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){r=f(n,"OPTGROUP",{label:!0});for(var t=l(r),c=0;c<a.length;c+=1)a[c].l(t);t.forEach(h),this.h()},h:function(){v(r,"label",t[17]),this.first=r},m:function(n,t){m(n,r,t);for(var c=0;c<a.length;c+=1)a[c].m(r,null)},p:function(n,t){if(72&t){var i;for(c=n[16],i=0;i<c.length;i+=1){var e=mn(n,c,i);a[i]?a[i].p(e,t):(a[i]=dn(e),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=c.length}},d:function(n){n&&h(r),T(a,n)}}}function En(n){var t,r,c=new nn({props:{$$slots:{default:[Dn],summary:[$n,function(n){return{15:n.open}},function(n){return n.open?32768:0}]},$$scope:{ctx:n}}});return{c:function(){t=u("div"),J(c.$$.fragment),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var r=l(t);q(c.$$.fragment,r),r.forEach(h),this.h()},h:function(){v(t,"class","members")},m:function(n,a){m(n,t,a),B(c,t,null),r=!0},p:function(n,t){var r={};4227073&t&&(r.$$scope={dirty:t,ctx:n}),c.$set(r)},i:function(n){r||(d(c.$$.fragment,n),r=!0)},o:function(n){$(c.$$.fragment,n),r=!1},d:function(n){n&&h(t),U(c)}}}function $n(n){var t,r,c=n[15]?"Hide members":"Show members";return{c:function(){t=u("span"),r=A(c),this.h()},l:function(n){t=f(n,"SPAN",{slot:!0});var a=l(t);r=V(a,c),a.forEach(h),this.h()},h:function(){v(t,"slot","summary")},m:function(n,c){m(n,t,c),k(t,r)},p:function(n,t){32768&t&&c!==(c=n[15]?"Hide members":"Show members")&&L(r,c)},d:function(n){n&&h(t)}}}function yn(n){var t,r;return{c:function(){t=u("span"),r=A("static")},l:function(n){t=f(n,"SPAN",{});var c=l(t);r=V(c,"static"),c.forEach(h)},m:function(n,c){m(n,t,c),k(t,r)},d:function(n){n&&h(t)}}}function bn(n){var t,r;return{c:function(){t=u("span"),r=A("get")},l:function(n){t=f(n,"SPAN",{});var c=l(t);r=V(c,"get"),c.forEach(h)},m:function(n,c){m(n,t,c),k(t,r)},d:function(n){n&&h(t)}}}function kn(n){var t,r,c,a,i,e,o,s,p,d,g=n[12].name+"",E=n[7](n[12].params)+"",$=n[12].description+"",D=n[12].static&&yn(),I="get"===n[12].kind&&bn();return{c:function(){t=u("tr"),r=u("td"),D&&D.c(),c=y(),I&&I.c(),a=y(),i=u("th"),e=A(g),o=A(E),s=y(),p=u("td"),d=y(),this.h()},l:function(n){t=f(n,"TR",{});var u=l(t);r=f(u,"TD",{class:!0});var v=l(r);D&&D.l(v),c=b(v),I&&I.l(v),v.forEach(h),a=b(u),i=f(u,"TH",{});var m=l(i);e=V(m,g),o=V(m,E),m.forEach(h),s=b(u),p=f(u,"TD",{}),l(p).forEach(h),d=b(u),u.forEach(h),this.h()},h:function(){v(r,"class","has-text-grey")},m:function(n,u){m(n,t,u),k(t,r),D&&D.m(r,null),k(r,c),I&&I.m(r,null),k(t,a),k(t,i),k(i,e),k(i,o),k(t,s),k(t,p),p.innerHTML=$,k(t,d)},p:function(n,t){n[12].static?D||((D=yn()).c(),D.m(r,c)):D&&(D.d(1),D=null),"get"===n[12].kind?I||((I=bn()).c(),I.m(r,null)):I&&(I.d(1),I=null),1&t&&g!==(g=n[12].name+"")&&L(e,g),1&t&&E!==(E=n[7](n[12].params)+"")&&L(o,E),1&t&&$!==($=n[12].description+"")&&(p.innerHTML=$)},d:function(n){n&&h(t),D&&D.d(),I&&I.d()}}}function Dn(n){for(var t,r,c,a,i=n[9].members,e=[],o=0;o<i.length;o+=1)e[o]=kn(hn(n,i,o));return{c:function(){t=y(),r=u("div"),c=u("div"),a=u("table");for(var n=0;n<e.length;n+=1)e[n].c();this.h()},l:function(n){t=b(n),r=f(n,"DIV",{class:!0});var i=l(r);c=f(i,"DIV",{class:!0});var o=l(c);a=f(o,"TABLE",{class:!0});for(var s=l(a),u=0;u<e.length;u+=1)e[u].l(s);s.forEach(h),o.forEach(h),i.forEach(h),this.h()},h:function(){v(a,"class","table"),v(c,"class","table-container"),v(r,"class","notification is-white")},m:function(n,i){m(n,t,i),m(n,r,i),k(r,c),k(c,a);for(var o=0;o<e.length;o+=1)e[o].m(a,null)},p:function(n,t){if(129&t){var r;for(i=n[9].members,r=0;r<i.length;r+=1){var c=hn(n,i,r);e[r]?e[r].p(c,t):(e[r]=kn(c),e[r].c(),e[r].m(a,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=i.length}},d:function(n){n&&h(t),n&&h(r),T(e,n)}}}function In(n){var t,r,c,a,i,e,o,s,p,g,E,D,I,R,w=n[9].name+"",S=n[7](n[9].params)+"",T=n[9].description+"",H=n[9].members.length&&En(n);return{c:function(){t=u("div"),r=u("h2"),c=u("a"),a=A("#"),e=y(),o=A(w),s=A(S),g=y(),E=u("div"),D=y(),H&&H.c(),I=y(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var i=l(t);r=f(i,"H2",{id:!0,class:!0});var u=l(r);c=f(u,"A",{href:!0,class:!0});var v=l(c);a=V(v,"#"),v.forEach(h),e=b(u),o=V(u,w),s=V(u,S),u.forEach(h),g=b(i),E=f(i,"DIV",{class:!0}),l(E).forEach(h),D=b(i),H&&H.l(i),I=b(i),i.forEach(h),this.h()},h:function(){v(c,"href",i=n[6](n[9])),v(c,"class","anchor"),v(r,"id",p=n[9].slug),v(r,"class","title is-5"),v(E,"class","content"),v(t,"class","item svelte-1f1b5ok")},m:function(n,i){m(n,t,i),k(t,r),k(r,c),k(c,a),k(r,e),k(r,o),k(r,s),k(t,g),k(t,E),E.innerHTML=T,k(t,D),H&&H.m(t,null),k(t,I),R=!0},p:function(n,a){(!R||1&a&&i!==(i=n[6](n[9])))&&v(c,"href",i),(!R||1&a)&&w!==(w=n[9].name+"")&&L(o,w),(!R||1&a)&&S!==(S=n[7](n[9].params)+"")&&L(s,S),(!R||1&a&&p!==(p=n[9].slug))&&v(r,"id",p),(!R||1&a)&&T!==(T=n[9].description+"")&&(E.innerHTML=T),n[9].members.length?H?(H.p(n,a),1&a&&d(H,1)):((H=En(n)).c(),d(H,1),H.m(t,I)):H&&(x(),$(H,1,1,(function(){H=null})),P())},i:function(n){R||(d(H),R=!0)},o:function(n){$(H),R=!1},d:function(n){n&&h(t),H&&H.d()}}}function Rn(n){for(var t,r,c,a,i,e,o,s,p,g,E,I,w,L,_,M,O,z,C,F,K=[],Q=new ln,W=new j({props:{title:"API Reference",description:"Guides & tutorials"}}),X=n[3],Y=function(n){return n[17]},Z=0;Z<X.length;Z+=1){var nn=pn(n,X,Z),tn=Y(nn);Q.set(tn,K[Z]=gn(tn,nn))}for(var rn=new un({props:{folders:n[3],apiLink:n[6]}}),cn=n[0],an=[],en=0;en<cn.length;en+=1)an[en]=In(vn(n,cn,en));var on=function(n){return $(an[n],1,1,(function(){an[n]=null}))};return{c:function(){J(W.$$.fragment),t=y(),r=u("div"),c=u("div"),a=u("nav"),i=u("div"),e=u("select"),o=u("option"),s=A("Jump to...");for(var n=0;n<K.length;n+=1)K[n].c();g=y(),E=u("div"),I=u("div"),J(rn.$$.fragment),w=y(),L=u("div"),_=u("h1"),M=A("API Reference"),O=y();for(var f=0;f<an.length;f+=1)an[f].c();this.h()},l:function(n){q(W.$$.fragment,n),t=b(n),r=f(n,"DIV",{class:!0});var u=l(r);c=f(u,"DIV",{class:!0});var v=l(c);a=f(v,"NAV",{class:!0});var m=l(a);i=f(m,"DIV",{class:!0});var p=l(i);e=f(p,"SELECT",{value:!0});var d=l(e);o=f(d,"OPTION",{value:!0});var $=l(o);s=V($,"Jump to..."),$.forEach(h);for(var y=0;y<K.length;y+=1)K[y].l(d);d.forEach(h),p.forEach(h),m.forEach(h),g=b(v),E=f(v,"DIV",{class:!0});var k=l(E);I=f(k,"DIV",{class:!0});var D=l(I);q(rn.$$.fragment,D),D.forEach(h),w=b(k),L=f(k,"DIV",{class:!0});var R=l(L);_=f(R,"H1",{class:!0});var x=l(_);M=V(x,"API Reference"),x.forEach(h),O=b(R);for(var P=0;P<an.length;P+=1)an[P].l(R);R.forEach(h),k.forEach(h),v.forEach(h),u.forEach(h),this.h()},h:function(){o.__value="Jump to...",o.value=o.__value,v(i,"class","select is-rounded"),S(i,"is-loading",n[2]),v(a,"class","field"),v(I,"class","column is-3 is-hidden-touch"),v(_,"class","title"),v(L,"class","column"),v(E,"class","columns"),v(c,"class","container"),v(r,"class","section")},m:function(u,f){B(W,u,f),m(u,t,f),m(u,r,f),k(r,c),k(c,a),k(a,i),k(i,e),k(e,o),k(o,s);for(var l=0;l<K.length;l+=1)K[l].m(e,null);p=n[1].params.slug,G(e,p),k(c,g),k(c,E),k(E,I),B(rn,I,null),k(E,w),k(E,L),k(L,_),k(_,M),k(L,O);for(var h=0;h<an.length;h+=1)an[h].m(L,null);z=!0,C||(F=D(e,"change",wn),C=!0)},p:function(n,t){var r=R(t,1)[0];if(72&r){var c=n[3];K=H(K,r,Y,1,n,c,Q,e,N,gn,null,pn)}if((!z||2&r&&p!==(p=n[1].params.slug))&&G(e,p),4&r&&S(i,"is-loading",n[2]),32961&r){var a;for(cn=n[0],a=0;a<cn.length;a+=1){var o=vn(n,cn,a);an[a]?(an[a].p(o,r),d(an[a],1)):(an[a]=In(o),an[a].c(),d(an[a],1),an[a].m(L,null))}for(x(),a=cn.length;a<an.length;a+=1)on(a);P()}},i:function(n){if(!z){d(W.$$.fragment,n),d(rn.$$.fragment,n);for(var t=0;t<cn.length;t+=1)d(an[t]);z=!0}},o:function(n){$(W.$$.fragment,n),$(rn.$$.fragment,n),an=an.filter(Boolean);for(var t=0;t<an.length;t+=1)$(an[t]);z=!1},d:function(n){U(W,n),n&&h(t),n&&h(r);for(var c=0;c<K.length;c+=1)K[c].d();U(rn),T(an,n),C=!1,F()}}}function xn(n){return Pn.apply(this,arguments)}function Pn(){return(Pn=M(O.mark((function n(t){var r,c;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.params.version,n.next=3,this.fetch("".concat(r,"/api/data.json")).then((function(n){return n.json()}));case 3:return c=n.sent,n.abrupt("return",{index:c});case 5:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function wn(n){window.location=n.target.value}function An(n,t,r){var c,a,i=t.index,e=[],o=new Map;i.forEach((function(n){var t=o.get(n.dirname);t||(t={dirname:n.dirname,items:[]},e.push(t),o.set(n.dirname,t)),t.items.push(n)}));var s=z(),u=s.page,f=s.preloading;C(n,u,(function(n){return r(1,c=n)})),C(n,f,(function(n){return r(2,a=n)}));return n.$set=function(n){"index"in n&&r(0,i=n.index)},[i,c,a,e,u,f,function(n){return"".concat(c.params.version,"/api/#").concat(n.slug)},function(n){return n?"(".concat(n.map((function(n){return n.name})).join(", "),")"):""}]}var Vn=function(t){n(s,o);var r=fn(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,An,Rn,i,{index:0}),t}return s}();export default Vn;export{xn as preload};
