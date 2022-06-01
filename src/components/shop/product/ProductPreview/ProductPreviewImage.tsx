import { useState } from 'react';
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

const ProductPreviewImage = ({ images }) => {
  const [back, front] = [images[0].url, images[1].url];
  const [image, setImage] = useState({ url: back, alt: 'back' });
  return (
    <ProductImage
      src={image.url}
      alt={image.alt}
      onMouseEnter={() => {
        setTimeout(() => {
          setImage({ url: front, alt: 'front' });
        }, 250);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setImage({ url: back, alt: 'back' });
        }, 250);
      }}
    />
  );
};

export default ProductPreviewImage;
