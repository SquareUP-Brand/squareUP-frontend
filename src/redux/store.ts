import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
