import{a as n,b as s,c as a,d as t,i as r,e,S as o,s as c,U as i,f,g as u,t as l,h,j as v,l as p,k as d,q as m,m as g,o as b,p as $,C as w,D as E,E as j,F as x,y as M,G as V,H as D,I as H,u as I,A as S}from"./c.SEO.3527275b.js";import{_ as k}from"./c.index.09f93650.js";import{b as y}from"./c.app.3ffed544.js";function A(n,s,a){var t=n.slice();return t[3]=s[a],t}function G(n){var s,a,t,r,e,o,c,i,w=n[3].description+"";return{c:function(){s=f("a"),a=f("div"),t=u(),r=f("div"),e=f("div"),o=l("View"),c=u(),this.h()},l:function(n){s=h(n,"A",{class:!0,href:!0});var i=v(s);a=h(i,"DIV",{class:!0}),v(a).forEach(p),t=d(i),r=h(i,"DIV",{class:!0});var f=v(r);e=h(f,"DIV",{class:!0});var u=v(e);o=m(u,"View"),u.forEach(p),f.forEach(p),c=d(i),i.forEach(p),this.h()},h:function(){g(a,"class","content svelte-5eavl3"),g(e,"class","button is-link"),g(r,"class","buttons is-right"),g(s,"class","box svelte-5eavl3"),g(s,"href",i=n[1].params.version+"/docs/"+n[3].slug)},m:function(n,i){b(n,s,i),$(s,a),a.innerHTML=w,$(s,t),$(s,r),$(r,e),$(e,o),$(s,c)},p:function(n,t){1&t&&w!==(w=n[3].description+"")&&(a.innerHTML=w),3&t&&i!==(i=n[1].params.version+"/docs/"+n[3].slug)&&g(s,"href",i)},d:function(n){n&&p(s)}}}function L(n){for(var s,a,t,r,e,o,c,S,k,y=new i({props:{title:"Manual",description:"Guides & tutorials"}}),L=n[0],T=[],q=0;q<L.length;q+=1)T[q]=G(A(n,L,q));return{c:function(){w(y.$$.fragment),s=u(),a=f("h1"),t=l("Manual"),r=u(),e=f("p"),o=l("Select one of the manuals below:"),c=u();for(var n=0;n<T.length;n+=1)T[n].c();S=E(),this.h()},l:function(n){j(y.$$.fragment,n),s=d(n),a=h(n,"H1",{class:!0});var i=v(a);t=m(i,"Manual"),i.forEach(p),r=d(n),e=h(n,"P",{class:!0});var f=v(e);o=m(f,"Select one of the manuals below:"),f.forEach(p),c=d(n);for(var u=0;u<T.length;u+=1)T[u].l(n);S=E(),this.h()},h:function(){g(a,"class","title"),g(e,"class","subtitle")},m:function(n,i){x(y,n,i),b(n,s,i),b(n,a,i),$(a,t),b(n,r,i),b(n,e,i),$(e,o),b(n,c,i);for(var f=0;f<T.length;f+=1)T[f].m(n,i);b(n,S,i),k=!0},p:function(n,s){var a=M(s,1)[0];if(3&a){var t;for(L=n[0],t=0;t<L.length;t+=1){var r=A(n,L,t);T[t]?T[t].p(r,a):(T[t]=G(r),T[t].c(),T[t].m(S.parentNode,S))}for(;t<T.length;t+=1)T[t].d(1);T.length=L.length}},i:function(n){k||(V(y.$$.fragment,n),k=!0)},o:function(n){D(y.$$.fragment,n),k=!1},d:function(n){H(y,n),n&&p(s),n&&p(a),n&&p(r),n&&p(e),n&&p(c),I(T,n),n&&p(S)}}}function T(n){var s,a;return k.async((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params.version,t.next=3,k.awrap(this.fetch("".concat(s,"/docs/overview.json")).then((function(n){return n.json()})));case 3:return a=t.sent,t.abrupt("return",{topics:a});case 5:case"end":return t.stop()}}),null,this)}function q(n,s,a){var t,r=s.topics,e=void 0===r?[]:r,o=y().page;return S(n,o,(function(n){return a(1,t=n)})),n.$set=function(n){"topics"in n&&a(0,e=n.topics)},[e,t,o]}var C=function(i){function f(n){var o;return s(this,f),o=a(this,t(f).call(this)),r(e(o),n,q,L,c,{topics:0}),o}return n(f,o),f}();export default C;export{T as preload};
