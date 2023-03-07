import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type tCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
  index: number;
};

interface iCartSliceState {
  totalPrice: number;
  items: tCartItem[];
}

const initialState: iCartSliceState = {
  totalPrice: 0,
  items: [],
};

function priceCalc(state: iCartSliceState) {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: iCartSliceState, action: PayloadAction<tCartItem>) {
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
    removeItem(state: iCartSliceState, action: PayloadAction<tCartItem>) {
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== action.payload.id ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type
        );
      });
      priceCalc(state);
    },
    removeOneItem(state: iCartSliceState, action: PayloadAction<tCartItem>) {
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

      if (findItem?.count === 0) {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.size !== action.payload.size ||
            obj.type !== action.payload.type,
        );
      }
      priceCalc(state);
    },
    clearItems(state: iCartSliceState) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems =
  (id: string, typeNames: string[], sizes: number[], activeType: number, activeSize: number) =>
  (state: RootState) =>
    state.cart.items.find(
      (obj) =>
        obj.id === id && obj.type === typeNames[activeType] && obj.size === sizes[activeSize],
    );

export const { addItem, removeItem, removeOneItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
