import './styles/normalize.css';
import './styles/index.css';

import { getAllProducts, queryApiProduct } from './requests/products.js';
import { productsTempates, productTempate } from './services/markupService.js';

// getAllProducts().then(res => res.data);

const listProd = document.getElementById('allProducts');

async function render() {
  const prod = await getAllProducts();
  console.log(prod);

  listProd.innerHTML = productsTempates(prod);
}

//render();

const searchProductForm = document.querySelector('#singleProductForm');
const elemSingleProduct = document.querySelector('#singleProduct');

searchProductForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();
  const query = evt.currentTarget.elements.id.value.trim();
  const product = await queryApiProduct(query);
  console.log(product);
  const markup = productTempate(product);

  elemSingleProduct.innerHTML = markup;
}
