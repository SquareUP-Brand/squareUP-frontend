import { useNavigate } from 'react-router-dom';
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

const ProductPreview = ({ images, title, price, id }) => {
  const navigate = useNavigate();
  console.log(images);

  return (
    <ProductPreviewContainer onClick={() => navigate(`/products/${id}`)}>
      <ProductPreviewImage images={images} />
      <h3>{title} - ${price}</h3>
    </ProductPreviewContainer>
  );
};

export default ProductPreview;
