import{S as t,i as a,s,a as n,c as e,b as i,e as r,d as c,f as o,g as l,h as u,k as m,l as h,n as f,o as p,r as $,u as d,v as g}from"./c.client.e9cb7ddb.js";function x(t){let a,s,x,b=t[0].content+"";const j=new n({props:{title:t[0].title,description:t[0].title+" in the atscm manual pages"}});return{c(){e(j.$$.fragment),a=i(),s=r("div"),this.h()},l(t){c(j.$$.fragment,t),a=o(t),s=l(t,"DIV",{class:!0}),u(s).forEach(m),this.h()},h(){h(s,"class","content")},m(t,n){f(j,t,n),p(t,a,n),p(t,s,n),s.innerHTML=b,x=!0},p(t,[a]){const n={};1&a&&(n.title=t[0].title),1&a&&(n.description=t[0].title+" in the atscm manual pages"),j.$set(n),(!x||1&a)&&b!==(b=t[0].content+"")&&(s.innerHTML=b)},i(t){x||($(j.$$.fragment,t),x=!0)},o(t){d(j.$$.fragment,t),x=!1},d(t){g(j,t),t&&m(a),t&&m(s)}}}async function b({params:{version:t,manual:a}}){const s=await this.fetch(`${t}/docs/${a}.json`);return s.ok||this.error(s.status,s.statusText),{manual:await s.json()}}function j(t,a,s){let{manual:n}=a;return t.$set=t=>{"manual"in t&&s(0,n=t.manual)},[n]}export default class extends t{constructor(t){super(),a(this,t,j,x,s,{manual:0})}}export{b as preload};
