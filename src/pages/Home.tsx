import { useGetAllProductsQuery } from 'services/shopifyApi'; 
import styled from 'styled-components';
import ProductPreview from '../components/shop/product/ProductPreview/ProductPreview';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5em;
`;

const Home = () => {
  const {data , isFetching} = useGetAllProductsQuery();
  if (isFetching) return null;

  const {nodes : products} = data!.products;
    

  return (
    <Container>
      {products.map(product => (
        <ProductPreview
          title={product.title}
          images={product.images.nodes}
          price={product.variants.nodes[0].priceV2.amount.split('.')[0]}
          key={product.handle}
          id={product.handle}
        />
      ))}
    </Container>
  );
};

export default Home;
