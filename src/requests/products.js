import apiInstance from '../services/api.js';

export async function getAllProducts() {
  const res = await apiInstance.get('/products');
  return res.data.products;
}

export async function queryApiProduct(query) {
  const response = await apiInstance.get(`/products/${query}`);
  return response.data;
}

export async function sendProduct(productData) {
  const data = await apiInstance.post('/products/add', productData);
  return data;
}
