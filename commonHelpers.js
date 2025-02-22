import{a as c}from"./assets/vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=c.create({baseURL:"https://dummyjson.com"});async function l(){return(await u.get("/products")).data.products}function a(t){return`<div>
    <img src="${t.thumbnail}" alt="${t.title}" />
    <p>${t.title}</p>
      <p>${t.description}</p>
    <p>brand: ${t.brand}</p>
 </div>`}function d(t){return t.map(a).join("")}const f=document.getElementById("allProducts");async function p(){const t=await l();console.log(t),f.innerHTML=d(t)}p();
//# sourceMappingURL=commonHelpers.js.map
