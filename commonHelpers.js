import{a as s}from"./assets/vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=s.create({baseURL:"https://dummyjson.com"});async function l(t){return(await u.get(`/products/${t}`)).data}function a(t){return`<div>
    <img src="${t.thumbnail}" alt="${t.title}" />
    <p>${t.title}</p>
      <p>${t.description}</p>
    <p>brand: ${t.brand}</p>
 </div>`}document.getElementById("allProducts");const d=document.querySelector("#singleProductForm"),m=document.querySelector("#singleProduct");d.addEventListener("submit",f);async function f(t){t.preventDefault();const o=t.currentTarget.elements.id.value.trim(),n=await l(o);console.log(n);const i=a(n);m.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
