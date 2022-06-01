import Product from 'pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Cart from 'pages/Cart';
import App from './App';
import Home from './pages/Home';

const TestPage = lazy(() => import('./pages/Test'));

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products/:handle" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        {import.meta.env.DEV ? <Route path="test" element={<TestPage />} /> : ''}
      </Route>
    </Routes>
  </BrowserRouter>
);
