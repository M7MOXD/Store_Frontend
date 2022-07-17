import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import totalReducer from './reducers/totalSlice';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    total: totalReducer,
    auth: authReducer,
  },
});
