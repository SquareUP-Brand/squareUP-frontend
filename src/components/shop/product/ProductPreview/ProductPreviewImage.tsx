import { useState } from 'react';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 16.75rem;
  aspect-ratio: 2.5/3.5;
`;

const ProductPreviewImage = ({ images }) => {
  const [back, front] = [images[0].src, images[1].src];
  const [image, setImage] = useState({ src: back, alt: 'back' });
  return (
    <ProductImage
      src={image.src}
      alt={image.alt}
      onMouseEnter={() => setImage({ src: front, alt: 'front' })}
      onMouseLeave={() => setImage({ src: back, alt: 'back' })}
    />
  );
};

export default ProductPreviewImage;
