import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import totalReducer from './reducers/totalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    total: totalReducer,
  },
});
