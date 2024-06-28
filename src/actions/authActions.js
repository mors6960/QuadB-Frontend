// src/actions/authActions.js
import axios from 'axios';

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/QuadB/auth/login', { username, password });
    // Dispatch action to update Redux state with user data or token
    console.log(data); // Example: dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for login failure
    console.error('Login error:', error);
  }
};

export const registerUser = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/QuadB/auth/register', { username, password });
    // Dispatch action for successful registration
    console.log(data); // Example: dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for registration failure
    console.error('Registration error:', error);
  }
};

export const registerAdminUser = (username, password, adminKey) => async (dispatch) => {
  try {
    const { data } = await axios.post('/QuadB/auth/register-admin', { username, password, adminKey });
    // Dispatch action for successful admin registration
    console.log(data); // Example: dispatch({ type: 'REGISTER_ADMIN_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch action for admin registration failure
    console.error('Admin registration error:', error);
  }
};
