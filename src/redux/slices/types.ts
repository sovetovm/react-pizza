//CART TYPES
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

export interface iCartSliceState {
  totalPrice: number;
  items: tCartItem[];
}

//FILTER TYPES
export type tSort = {
  name: string;
  sortProperty: 'rating' | '-rating' | 'price' | '-price' | '-title';
};
export interface iFilterSliceState {
  categoryId: number;
  sortType: tSort;
  currentPage: number;
  searchValue: string;
}

//PIZZA TYPES

export type tPizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface iPizzaSliceState {
  pizzas: tPizza[];
  status: Status;
}

export type tFetchParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: number;
};
