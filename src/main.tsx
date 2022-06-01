import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
