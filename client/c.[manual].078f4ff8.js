import{S as a,i as t,s as n,I as s,w as e,a as l,e as i,y as u,d as m,c as r,b as c,f as o,g as f,z as h,h as p,A as $,B as d,C as g}from"./c.SEO.c9f7bbdd.js";function w(a){let t,n,w,x=a.manual.content+"";const b=new s({props:{title:a.manual.title,description:a.manual.title+" in the atscm manual pages"}});return{c(){e(b.$$.fragment),t=l(),n=i("div"),this.h()},l(a){u(b.$$.fragment,a),t=m(a),n=r(a,"DIV",{class:!0}),c(n).forEach(o),this.h()},h(){f(n,"class","content")},m(a,s){h(b,a,s),p(a,t,s),p(a,n,s),n.innerHTML=x,w=!0},p(a,t){const s={};a.manual&&(s.title=t.manual.title),a.manual&&(s.description=t.manual.title+" in the atscm manual pages"),b.$set(s),w&&!a.manual||x===(x=t.manual.content+"")||(n.innerHTML=x)},i(a){w||($(b.$$.fragment,a),w=!0)},o(a){d(b.$$.fragment,a),w=!1},d(a){g(b,a),a&&o(t),a&&o(n)}}}async function x({params:{version:a,manual:t}}){const n=await this.fetch(`${a}/docs/${t}.json`);return n.ok||this.error(n.status,n.statusText),{manual:await n.json()}}function b(a,t,n){let{manual:s}=t;return a.$set=a=>{"manual"in a&&n("manual",s=a.manual)},{manual:s}}export default class extends a{constructor(a){super(),t(this,a,b,w,n,{manual:0})}}export{x as preload};
