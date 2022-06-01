import Button from 'components/common/Button';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputStepper from '../../common/InputStepper';

const CartQuantityControllerContainer = styled.form`
  grid-area: 3 / 2;
  display: flex;
  height: 8em;
  align-items: center;
`;

const AddToCartButton = styled(Button)`
  margin-inline-start: 1em;
`;

// TODO after add to cart, say added and update count
// Button color background-color: #686868;

const CartQuantityController = () => {
  const quantityState = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToCart(quantityState[0]));
    // TODO redirect to cart
    navigate('/cart');
  };

  return (
    <CartQuantityControllerContainer onSubmit={handleSubmit}>
      <InputStepper state={quantityState} />
      <AddToCartButton as="input" type="submit" value="ADD TO CART" />
    </CartQuantityControllerContainer>
  );
};

export default CartQuantityController;
