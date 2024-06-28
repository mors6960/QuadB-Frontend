// src/reducers/cartReducer.js
const initialState = {
    cart: null,
    loading: false,
    error: null,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CART_SUCCESS':
        return {
          ...state,
          cart: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_CART_FAIL':
        return {
          ...state,
          cart: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  