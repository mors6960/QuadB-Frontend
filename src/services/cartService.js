// src/services/cartService.js
import axios from 'axios';

export const getCart = async () => {
  try {
    const { data } = await axios.get('/QuadB/cart');
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};
