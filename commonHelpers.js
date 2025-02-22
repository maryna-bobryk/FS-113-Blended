import{a as d}from"./assets/vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const i=d.create({baseURL:"https://dummyjson.com"});async function l(){return(await i.get("/products")).data.products}async function p(e){return(await i.get(`/products/${e}`)).data}async function m(e){return await i.post("/products/add",e)}function a(e){return`<div>
    <img src="${e.thumbnail}" alt="${e.title}" />
    <p>${e.title}</p>
      <p>${e.description}</p>
    <p>brand: ${e.brand}</p>
 </div>`}function f(e){return e.map(a).join("")}function y({title:e,description:n,price:o}){return`<div>
    <p>${e}</p>
      <p>${n}</p>
    <p>price: ${o}</p>
 </div>`}const g=document.getElementById("allProducts");async function P(){const e=await l();console.log(e),g.innerHTML=f(e)}P();const w=document.querySelector("#singleProductForm"),L=document.querySelector("#singleProduct");w.addEventListener("submit",b);async function b(e){e.preventDefault();const n=e.currentTarget.elements.id.value.trim(),o=await p(n);console.log(o);const c=a(o);L.innerHTML=c}const h=document.querySelector("#newProductForm"),u=document.querySelector("#newProductSection");h.addEventListener("submit",T);async function T(e){e.preventDefault();const n=e.currentTarget.elements.title.value.trim(),o=e.currentTarget.elements.description.value.trim(),c=e.currentTarget.elements.price.value.trim(),t={title:n,description:o,price:c};try{await m(t),u.innerHTML=y(t)}catch(r){u.innerHTML=`<p style="color: red">${r}</p>`}}
//# sourceMappingURL=commonHelpers.js.map
