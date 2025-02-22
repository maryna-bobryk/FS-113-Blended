function productTempates(prod) {
  const markup = `<div>
    <img src="${prod.thumbnail}" alt="${prod.title}" />
    <p>${prod.title}</p>
      <p>${prod.description}</p>
    <p>brand: ${prod.brand}</p>
 </div>`;
  return markup;
}

export function productsTempates(products) {
  return products.map(productTempates).join('');
}
