import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18+
import './index.css'; // Optional: Add global styles
import App from './App'; // Import the main App component

// Create a root element to attach the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

