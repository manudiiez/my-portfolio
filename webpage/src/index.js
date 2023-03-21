import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/global.js';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
