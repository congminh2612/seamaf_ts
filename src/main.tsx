
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { customTheme } from './component/globalStyle/Custom';
import './component/globalStyle/GlobalStyle.css';
import Provider from './store/Provider';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>
);
