import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';           // Your global styles (Tailwind included)
import App from './App';        // Main App component
import reportWebVitals from './reportWebVitals';

// Optional: use HashRouter if deploying on GitHub Pages
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Optional: measure performance
reportWebVitals();
