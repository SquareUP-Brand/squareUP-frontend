import Button from 'components/common/Button';
import { useAppDispatch, useAppSelector } from 'hooks/typedReduxHooks';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeCart } from 'services/redux/cartSlice';
import {
  useAddToCartMutation,
  useCreateCartMutation,
} from 'services/shopifyApi';
import styled from 'styled-components';
import InputStepper from '../../../common/InputStepper';

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
  const [quantity] = quantityState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const [createCart] = useCreateCartMutation();
  const [addToCart] = useAddToCartMutation();

  // TODO Move event handler to seperate file

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quantity === 0) return;
    if (!cart.created) {
      createCart()
        .unwrap()
        .then(
          // TODO Catch cart creation errors!
          ({
            cartCreate: {
              cart: { id },
            },
          }) => dispatch(initializeCart(id))
        );
      // TODO redirect to cart
    }
    // TODO look into why adding to cart is behaving weird
    addToCart({
      cartId: cart.id,
      lines: [
        {
          merchandiseId: 'gid://shopify/ProductVariant/42880546636005',
          quantity,
        },
      ],
    });

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
