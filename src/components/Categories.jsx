import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

export default function Categories() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const onClickCategory = (index) => {
    dispatch(setCategoryId(index));
  };

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
}
