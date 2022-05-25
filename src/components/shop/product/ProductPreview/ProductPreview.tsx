import Button from 'components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductPreviewImage from './ProductPreviewImage';

const ProductPreviewContainer = styled.div``;

const ProductPreview = ({ images, title, price, id }) => {
  const navigate = useNavigate();

  return (
    <ProductPreviewContainer onClick={() => navigate(`/products/${id}`)}>
      <ProductPreviewImage images={images} />
      <h3>
        {title}
        {' '}
        {price}
      </h3>
      <Button>Buy</Button>
    </ProductPreviewContainer>
  );
};

export default ProductPreview;
