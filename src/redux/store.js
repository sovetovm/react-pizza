import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import show from './slices/hiddenSearchSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    show,
  },
});
