import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { category, sortBy, order, search, currentPage } = params;
  const res = await axios.get(
    `https://63bd4096d6600623889f0d40.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return res.data;
});

const initialState = {
  pizzas: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  // reducers: {
  //   setPizzas(state, action) {
  //     state.pizzas = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.pizzas = [];
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
