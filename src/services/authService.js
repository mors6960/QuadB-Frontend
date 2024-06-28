// src/services/authService.js
import axios from 'axios';

export const loginUser = async (username, password) => {
  try {
    const { data } = await axios.post('/QuadB/auth/login', { username, password });
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const registerUser = async (username, password) => {
  try {
    const { data } = await axios.post('/QuadB/auth/register', { username, password });
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const registerAdminUser = async (username, password, adminKey) => {
  try {
    const { data } = await axios.post('/QuadB/auth/register-admin', { username, password, adminKey });
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};
