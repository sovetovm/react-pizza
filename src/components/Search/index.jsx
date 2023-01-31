import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_2">
          <g id="Layer_3">
            <path d="M74.3,72.2L58.7,56.5C69.9,44,69,24.8,56.5,13.5s-31.7-10.3-43,2.2s-10.3,31.7,2.2,43c11.6,10.5,29.3,10.5,40.9,0    l15.7,15.7L74.3,72.2z M36.1,63.5c-15.1,0-27.4-12.3-27.4-27.4C8.7,20.9,21,8.7,36.1,8.7c15.1,0,27.4,12.3,27.4,27.4    C63.5,51.2,51.2,63.5,36.1,63.5z" />
            <path d="M36.1,12.8v3c11.2,0,20.3,9.1,20.3,20.3h3C59.4,23.2,49,12.8,36.1,12.8z" />
          </g>
        </g>
      </svg>
      <input className={styles.input} placeholder="Поиск пиццы..." />
    </div>
  );
}
