import './styles/normalize.css';
import './styles/index.css';

import {
  getAllProducts,
  queryApiProduct,
  sendProduct,
} from './requests/products.js';
import {
  productsTemplates,
  productTemplate,
  newProductTemaplate,
} from './services/markupService.js';

// getAllProducts().then(res => res.data);

const listProd = document.getElementById('allProducts');

async function render() {
  const prod = await getAllProducts();
  console.log(prod);

  listProd.innerHTML = productsTemplates(prod);
}

render();

const searchProductForm = document.querySelector('#singleProductForm');
const elemSingleProduct = document.querySelector('#singleProduct');

searchProductForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();
  const query = evt.currentTarget.elements.id.value.trim();
  const product = await queryApiProduct(query);
  console.log(product);
  const markup = productTemplate(product);

  elemSingleProduct.innerHTML = markup;
}

// !--------------------- PushEax Task 3 ----------------

const newProductForm = document.querySelector('#newProductForm');
const newProductSection = document.querySelector('#newProductSection');

newProductForm.addEventListener('submit', newProductHandler);

async function newProductHandler(event) {
  event.preventDefault();
  const title = event.currentTarget.elements.title.value.trim();
  const description = event.currentTarget.elements.description.value.trim();
  const price = event.currentTarget.elements.price.value.trim();

  const dataObject = {
    title,
    description,
    price,
  };

  try {
    await sendProduct(dataObject);
    newProductSection.innerHTML = newProductTemaplate(dataObject);
  } catch (error) {
    newProductSection.innerHTML = `<p style="color: red">${error}</p>`;
  }
}
