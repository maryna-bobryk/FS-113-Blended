import './styles/normalize.css';
import './styles/index.css';

import { getAllProducts } from './requests/products.js';
import { productsTempates } from './services/markupService.js';

// getAllProducts().then(res => res.data);

const listProd = document.getElementById('allProducts');

async function render() {
  const prod = await getAllProducts();
  console.log(prod);

  listProd.innerHTML = productsTempates(prod);
}

render();
