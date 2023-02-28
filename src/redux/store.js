import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import show from './slices/hiddenSearchSlice';
import pizza from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    show,
    pizza,
  },
});
