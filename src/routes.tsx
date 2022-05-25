import Product from 'routes/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';
import Home from './routes/Home';

const TestPage = lazy(() => import('./routes/Test'));

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products/:handle" element={<Product />} />
        {import.meta.env.DEV ? <Route path="test" element={<TestPage />} /> : ''}
      </Route>
    </Routes>
  </BrowserRouter>
);
