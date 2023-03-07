import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import ErrorPage from '../components/ErrorPage';
import { fetchPizzas, selectPizzaData, tPizza } from '../redux/slices/pizzaSlice';
import { selectFilter } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const { categoryId, sortType, currentPage, searchValue } = useSelector(selectFilter);
  const { pizzas, status } = useSelector(selectPizzaData);
  const dispatch = useAppDispatch();

  const getPizzas = React.useCallback(async () => {
    const category: string = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy: string = sortType.sortProperty.replace('-', '');
    const order: string = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search: string = searchValue ? `&search=${searchValue}` : '';
    dispatch(fetchPizzas({ category, sortBy, order, search, currentPage }));
    window.scrollTo(0, 0);
  }, [categoryId, currentPage, sortType, searchValue, dispatch]);

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage, getPizzas]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const items = pizzas.map((obj: tPizza) => <PizzaBlock key={obj.id} {...obj} />);

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
};

export default Home;
