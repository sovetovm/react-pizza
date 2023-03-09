import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { iPizzaSliceState, Status, tFetchParams, tPizza } from './types';

export const fetchPizzas = createAsyncThunk<tPizza[], tFetchParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<tPizza[]>(
      `https://63bd4096d6600623889f0d40.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

const initialState: iPizzaSliceState = {
  pizzas: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    // setPizzas(state, action: PayloadAction<Pizza[]>) {
    //   state.pizzas = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state: iPizzaSliceState) => {
      state.status = Status.LOADING;
      state.pizzas = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state: iPizzaSliceState, action: PayloadAction<tPizza[]>) => {
        state.pizzas = action.payload;
        state.status = Status.SUCCESS;
      },
    );
    builder.addCase(fetchPizzas.rejected, (state: iPizzaSliceState) => {
      state.status = Status.ERROR;
      state.pizzas = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;
// export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
