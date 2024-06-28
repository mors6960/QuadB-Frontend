// src/components/ProductDetail.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByName } from '../actions/productActions';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductByName(match.params.name));
  }, [dispatch, match.params.name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Product Detail</h2>
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.countInStock}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
