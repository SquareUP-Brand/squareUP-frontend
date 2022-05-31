import { createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';

export const initializeCart = createAsyncThunk(
  'shop/initializeCart',
  async () => {
    const cart = await client.checkout.create();
    console.log(cart);
    return {
      checkoutUrl: cart.checkoutUrl,
      id: cart.id,
      lineItemCount: cart.lineItems.reduce((count, lineItem) => lineItem.count + count , 0),
      lineItems: cart.lineItems,
      subtotalPrice: cart.subtotalPrice,
      completedAt: cart.completedAt,
      webUrl: cart.webUrl,
    };
  }
);

export const addToCart = createAsyncThunk(
  'shop/add',
 async () => {
   
 }
)

const initialState: { cart: Cart | Record<string, never> } = {
  cart: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initializeCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

// export const { initializeCart } = cartSlice.actions;
export default cartSlice.reducer as Reducer<typeof initialState>;
