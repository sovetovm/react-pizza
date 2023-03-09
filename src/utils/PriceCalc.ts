import { tCartItem } from '../redux/slices/types';

export const priceCalc = (items: tCartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
