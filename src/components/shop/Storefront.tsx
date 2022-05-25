import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchAllProducts } from 'redux/shopSlice';
import styled from 'styled-components';
import ProductPreview from './product/ProductPreview/ProductPreview';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5em;
`;

const Storefront = () => {
  const products = useAppSelector(state => state.shop.products);

  return (
    <Container>
      {products.map(product => (
        <ProductPreview
          title={product.title}
          images={product.images}
          price={product.price}
          key={product.handle}
          id={product.handle}
        />
      ))}
    </Container>
  );
};

export default Storefront;
