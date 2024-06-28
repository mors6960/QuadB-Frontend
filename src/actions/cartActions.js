// src/actions/cartActions.js
import axios from 'axios';

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/QuadB/cart');
    // Dispatch action to update Redux state with fetched cart
    console.log(data); // Example: dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for cart fetch failure
    console.error('Fetch cart error:', error);
  }
};
