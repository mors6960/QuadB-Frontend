// src/actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/QuadB/products');
    // Dispatch action to update Redux state with fetched products
    console.log(data); // Example: dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for product fetch failure
    console.error('Fetch products error:', error);
  }
};

export const getProductByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/QuadB/products/name?name=${name}`);
    // Dispatch action to update Redux state with fetched product
    console.log(data); // Example: dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for product fetch by name failure
    console.error('Fetch product by name error:', error);
  }
};
