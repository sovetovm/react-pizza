import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
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
