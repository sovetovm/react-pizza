import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setShowSearch } from '../../redux/slices/hiddenSearchSlice';
import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setShowSearch(false));
  }, [dispatch]);
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br /> 404 <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению, страницы с таким адресом нет на этом сайте!</p>
    </div>
  );
}
