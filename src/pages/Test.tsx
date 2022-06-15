import Button from 'components/common/Button';
import { useCreateCartMutation } from 'services/shopifyApi';

const Test = () => {
  const [createCart, { isLoading, data }] = useCreateCartMutation();
  console.log(data);

  return (
      <Button onClick={()=> createCart()}>Test Button</Button>

  );
};
export default Test;
