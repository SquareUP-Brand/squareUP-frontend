import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Scalars } from 'services/graphql/generated/types-operations';

interface CartSlice {
  created: boolean;
  id: Scalars['ID'];
}

const initialState = { created: false } as CartSlice;

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart(state, action: PayloadAction<Scalars['ID']>) {
      state.created = true;
      state.id = action.payload;
    },
  },
});

export const { initializeCart } = counterSlice.actions;
export default counterSlice.reducer;
