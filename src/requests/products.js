import apiInstance from '../services/api.js';

export async function getAllProducts() {
  const res = await apiInstance.get('/products');
  return res.data.products;
}
