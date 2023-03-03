import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import ErrorPage from '../components/ErrorPage';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { selectFilter } from '../redux/slices/filterSlice';

export default function Home() {
  const { categoryId, sortType, currentPage, searchValue } = useSelector(selectFilter);
  const { pizzas, status } = useSelector(selectPizzaData);
  const dispatch = useDispatch();

  const getPizzas = useCallback(async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ category, sortBy, order, search, currentPage }));
    window.scrollTo(0, 0);
  }, [categoryId, currentPage, sortType, searchValue, dispatch]);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage, getPizzas]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : items}</div>
      )}
      {status === 'error' ? null : <Pagination />}
    </div>
  );
}
