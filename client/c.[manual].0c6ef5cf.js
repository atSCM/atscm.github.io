import{S as t,i as a,s,N as n,w as e,a as i,e as r,y as o,d as c,c as l,b as u,f as m,g as h,z as f,h as p,A as $,B as d,C as g}from"./c.SEO.d36dde33.js";function w(t){let a,s,w,x=t[0].content+"";const j=new n({props:{title:t[0].title,description:t[0].title+" in the atscm manual pages"}});return{c(){e(j.$$.fragment),a=i(),s=r("div"),this.h()},l(t){o(j.$$.fragment,t),a=c(t),s=l(t,"DIV",{class:!0}),u(s).forEach(m),this.h()},h(){h(s,"class","content")},m(t,n){f(j,t,n),p(t,a,n),p(t,s,n),s.innerHTML=x,w=!0},p(t,[a]){const n={};1&a&&(n.title=t[0].title),1&a&&(n.description=t[0].title+" in the atscm manual pages"),j.$set(n),(!w||1&a)&&x!==(x=t[0].content+"")&&(s.innerHTML=x)},i(t){w||($(j.$$.fragment,t),w=!0)},o(t){d(j.$$.fragment,t),w=!1},d(t){g(j,t),t&&m(a),t&&m(s)}}}async function x({params:{version:t,manual:a}}){const s=await this.fetch(`${t}/docs/${a}.json`);return s.ok||this.error(s.status,s.statusText),{manual:await s.json()}}function j(t,a,s){let{manual:n}=a;return t.$set=t=>{"manual"in t&&s(0,n=t.manual)},[n]}export default class extends t{constructor(t){super(),a(this,t,j,w,s,{manual:0})}}export{x as preload};
