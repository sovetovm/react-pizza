import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
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
};

export default NotFoundBlock;
