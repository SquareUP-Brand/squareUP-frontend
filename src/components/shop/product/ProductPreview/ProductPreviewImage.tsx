import { useState } from 'react';
import { StateProduct } from 'redux/shopSlice';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 16.75rem;
  aspect-ratio: 2.5/3.5;
  transition: transform 0.75s;
  @media (min-width: 400px) {
    :hover {
      transform: rotateY(0.5turn);
    }
  }
`;

const ProductPreviewImage = ({ images }:Pick<StateProduct, 'images'>) => {
  const [back, front] = [images[0].src, images[1].src];
  const [image, setImage] = useState({ src: back, alt: 'back' });
  return (
    <ProductImage
      src={image.src}
      alt={image.alt}
      onMouseEnter={() => {
        setTimeout(() => {
          setImage({ src: front, alt: 'front' });
        }, 250);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setImage({ src: back, alt: 'back' });
        }, 250);
      }}
    />
  );
};

export default ProductPreviewImage;
