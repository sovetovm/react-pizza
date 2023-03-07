import React from 'react';
import ReactPaginate from 'react-paginate';

import { setCurrentPage } from '../../redux/slices/filterSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const onChangePage = (number: number) => dispatch(setCurrentPage(number));
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
    />
  );
};

export default Pagination;
