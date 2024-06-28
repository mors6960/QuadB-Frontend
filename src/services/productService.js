// src/services/productService.js
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get('/QuadB/products');
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getProductByName = async (name) => {
  try {
    const { data } = await axios.get(`/QuadB/products/name?name=${name}`);
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};
