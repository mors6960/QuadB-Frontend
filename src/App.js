// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
      
          <Route exact path="/" component={AuthForm} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:name" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        
          </Routes>
          </Router>
  );
};

export default App;
