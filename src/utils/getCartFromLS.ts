import { tCartItem } from '../redux/slices/types';
import { priceCalc } from './PriceCalc';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items: tCartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = priceCalc(items);
  if (items.length) {
    return {
      items,
      totalPrice,
    };
  }
};
