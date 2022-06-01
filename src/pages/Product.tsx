import styled from 'styled-components';
import CartQuantityController from 'components/shop/product/CartQuantityController';
import { useParams } from 'react-router-dom';
import Carousel from 'components/common/Carousel';
import { useGetProductByHandleQuery } from 'services/shopifyApi';

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
  const { data, isFetching } = useGetProductByHandleQuery({
    handle: handle!,
  });
  if (isFetching) return null;

  // This is a weird typescript issue I think
  const {
    title,
    description,
    images: { nodes: imageArray },
    variants: {
      nodes: [
        {
          priceV2: { amount: price },
        },
      ],
    },
  } = data!.productByHandle;

  return (
    <ProductContainer>
      <Carousel imageArray={imageArray.map(image => image.url)} />
      <Headline>{`${title} $${price}`}</Headline>
      <Description>{description}</Description>
      <CartQuantityController />
    </ProductContainer>
  );
};

export default Product;
