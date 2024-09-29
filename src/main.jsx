import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
    </BrowserRouter>
  </React.StrictMode>
);
