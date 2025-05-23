import styles from './Sidebar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAll, toggleTransfer, availableTransfers } from '../../store/slices/filterSlice';

const transferLabels = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filters.selected);
  const isAllSelected = selected.length === availableTransfers.length;

  const handleAllChange = () => {
    dispatch(toggleAll());
  };

  const handleTransferChange = (value) => {
    dispatch(toggleTransfer(value));
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Количество пересадок</h3>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked={isAllSelected} onChange={handleAllChange} />
            Все
          </label>
        </li>
        {availableTransfers.map((count) => (
          <li key={count}>
            <label>
              <input type="checkbox" checked={selected.includes(count)} onChange={() => handleTransferChange(count)} />
              {transferLabels[count]}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
