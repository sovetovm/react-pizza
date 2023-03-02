import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

function priceCalc(state) {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
        );
      });
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      priceCalc(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== action.payload.id ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type
        );
      });
      priceCalc(state);
    },
    removeOneItem(state, action) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
        );
      });
      if (findItem) {
        findItem.count--;
      }

      if (findItem.count === 0) {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.size !== action.payload.size ||
            obj.type !== action.payload.type,
        );
      }
      priceCalc(state);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItems = (id, typeNames, sizes, activeType, activeSize) => (state) =>
  state.cart.items.find(
    (obj) => obj.id === id && obj.type === typeNames[activeType] && obj.size === sizes[activeSize],
  );

export const { addItem, removeItem, removeOneItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
