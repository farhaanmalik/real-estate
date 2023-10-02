import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './components/RealEstateContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </AppProvider>
);
