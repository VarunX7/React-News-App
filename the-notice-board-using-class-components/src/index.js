import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style = 'background: #3f3f3f;';
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
