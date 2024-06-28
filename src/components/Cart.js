// src/components/Cart.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.products.map(item => (
        <div key={item._id}>
          <h3>{item.productName}</h3>
          <p>Quantity: {item.quantity}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
