import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FeaturesContext from './contexts/FeaturesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <FeaturesContext>
    <App />
   </FeaturesContext>
  </React.StrictMode>
);


reportWebVitals();
