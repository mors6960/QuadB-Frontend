// src/reducers/authReducer.js
const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
      case 'REGISTER_ADMIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          token: action.payload.token,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
      case 'REGISTER_ADMIN_FAIL':
        return {
          ...state,
          user: null,
          token: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  