// src/components/AuthForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser, registerAdminUser } from '../actions/authActions';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser(username, password));
  };

  const handleRegister = () => {
    dispatch(registerUser(username, password));
  };

  const handleRegisterAdmin = () => {
    const adminKey = 'QuadB'; // Replace with actual admin key input
    dispatch(registerAdminUser(username, password, adminKey));
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      
      <h2>Register</h2>
      <button onClick={handleRegister}>Register</button>
      
      <h2>Register as Admin</h2>
      <input type="text" placeholder="Admin Key" />
      <button onClick={handleRegisterAdmin}>Register as Admin</button>
    </div>
  );
};

export default AuthForm;
