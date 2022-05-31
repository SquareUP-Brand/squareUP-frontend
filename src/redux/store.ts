import { configureStore } from '@reduxjs/toolkit';
import { api as shopifyApi } from 'services/utils/shopifyBaseApi';
import shopReducer from './shopSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    [shopifyApi.reducerPath]: shopifyApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopifyApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
