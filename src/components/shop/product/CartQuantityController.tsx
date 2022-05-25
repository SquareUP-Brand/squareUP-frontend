import Button from 'components/common/Button';
import { useState } from 'react';
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

const CartQuantityController = () => {
  const quantityState = useState(0);

  return (
    <CartQuantityControllerContainer>
      <InputStepper state={quantityState} />
      <AddToCartButton as="input" type="submit" value="ADD TO CART" />
    </CartQuantityControllerContainer>
  );
};

export default CartQuantityController;
