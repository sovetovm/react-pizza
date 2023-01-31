export default function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    onChangeCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            className={value === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
