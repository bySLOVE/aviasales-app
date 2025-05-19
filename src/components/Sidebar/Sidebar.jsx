import styles from './Sidebar.module.scss';

const filters = [
  'Все',
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3>Количество пересадок</h3>
      <ul>
        {filters.map((filter, idx) => (
          <li key={idx}>
            <label>
              <input type="checkbox" />
              <span>{filter}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;