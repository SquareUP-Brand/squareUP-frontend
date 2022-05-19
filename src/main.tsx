import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './redux/store';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
