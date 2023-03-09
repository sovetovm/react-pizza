import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector(selectFilter);

  const onClickCategory = React.useCallback(
    (index: number) => {
      dispatch(setCategoryId(index));
    },
    [dispatch],
  );

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={value}
            className={categoryId === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Categories;
