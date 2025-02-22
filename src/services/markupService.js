export function productTemplate(prod) {
  const markup = `<div>
    <img src="${prod.thumbnail}" alt="${prod.title}" />
    <p>${prod.title}</p>
      <p>${prod.description}</p>
    <p>brand: ${prod.brand}</p>
 </div>`;
  return markup;
}

export function productsTemplates(products) {
  return products.map(productTemplate).join('');
}

export function newProductTemaplate({ title, description, price }) {
  const markup = `<div>
    <p>${title}</p>
      <p>${description}</p>
    <p>price: ${price}</p>
 </div>`;
  return markup;
}
