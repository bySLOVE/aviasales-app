import styles from './Sidebar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAll, toggleTransfer } from '../../store/slices/filterSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { all, transfers } = useSelector((state) => state.filters);

  const handleAllChange = () => {
    dispatch(toggleAll());
  };

  const handleTransferChange = (key) => {
    dispatch(toggleTransfer(key));
  };
  return (
    <aside className={styles.sidebar}>
      <h3>Количество пересадок</h3>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked={all} onChange={handleAllChange} />
            Все
          </label>
        </li>
        {[0, 1, 2, 3].map((count) => (
          <li key={count}>
            <label>
              <input type="checkbox" checked={transfers[count]} onChange={() => handleTransferChange(count)} />
              {count === 0 ? 'Без пересадок' : `${count} пересадк${count === 1 ? 'а' : count < 5 ? 'и' : ''}`}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
