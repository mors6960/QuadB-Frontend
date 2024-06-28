// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/QuadB',
    createProxyMiddleware({
      target: 'http://localhost:3001',  // Your backend server URL
      changeOrigin: true,
    })
  );
};
