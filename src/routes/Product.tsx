import styled from 'styled-components';
import CartQuantityController from 'components/shop/product/CartQuantityController';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import Carousel from 'components/common/Carousel';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`;

const Headline = styled.h3`
  margin-block-end: 0;
`;

const Description = styled.p`
  max-width: 50em;
`;

const Product = () => {
  const { handle } = useParams();
  const product = useAppSelector(state =>
    state.shop.products.find(product => product.handle === handle)
  );

  const imageArray = product?.images.map(image => image.src);

  return product ? (
    <ProductContainer>
      <Carousel imageArray={imageArray} />
      <Headline>{`${product.title} ${product.price}`}</Headline>
      <Description>{product.description}</Description>
      <CartQuantityController />
    </ProductContainer>
  ) : (
    null
  );
};

export default Product;
