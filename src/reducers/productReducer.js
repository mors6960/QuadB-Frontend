// src/reducers/productReducer.js
const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_PRODUCT_SUCCESS':
        return {
          ...state,
          product: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_PRODUCTS_FAIL':
      case 'FETCH_PRODUCT_FAIL':
        return {
          ...state,
          products: [],
          product: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  