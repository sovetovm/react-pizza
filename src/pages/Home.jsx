import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { setShowSearch } from '../redux/slices/hiddenSearchSlice';

export default function Home() {
  const { categoryId, sortType, currentPage, searchValue } = useSelector((state) => state.filter);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPizzas = useCallback(async () => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    try {
      const res = await axios.get(
        `https://63bd4096d6600623889f0d40.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
      );
      setPizzas(res.data);
      window.scrollTo(0, 0);
    } catch (error) {
      alert('ОШИБКА ПРИ ЗАГРУЗКЕ ПИЦЦ');
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, currentPage, sortType, searchValue]);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage, getPizzas]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowSearch(true));
    return () => {
      dispatch(setShowSearch(false));
    };
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : items}</div>
      <Pagination />
    </div>
  );
}
