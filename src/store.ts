import { configureStore } from '@reduxjs/toolkit';
import { api as shopifyApi } from 'services/utils/shopifyBaseApi';
import cartReducer from 'services/redux/cartSlice';


const store = configureStore({
  reducer: {
    [shopifyApi.reducerPath]: shopifyApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopifyApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
