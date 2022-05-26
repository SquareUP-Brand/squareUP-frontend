import { useNavigate } from 'react-router-dom';
import { StateProduct } from 'redux/shopSlice';
import styled from 'styled-components';
import ProductPreviewImage from './ProductPreviewImage';

const ProductPreviewContainer = styled.div`
  h3 {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const ProductPreview = ({ images, title, price, id }:Pick<StateProduct, 'images' | 'title' | 'price' | 'id'>) => {
  const navigate = useNavigate();

  return (
    <ProductPreviewContainer onClick={() => navigate(`/products/${id}`)}>
      <ProductPreviewImage images={images} />
      <h3>{title}</h3>
      <h4>{price}</h4>
    </ProductPreviewContainer>
  );
};

export default ProductPreview;
