import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import Screens from './screens';
import theme from './theme';
import React from 'react';
import { GlobalStyle } from './theme/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Screens />
    </ThemeProvider>
  </React.StrictMode>
);
