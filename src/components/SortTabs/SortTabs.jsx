import styles from './SortTabs.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../store/slices/sortSlice';

const sortOptions = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

const SortTabs = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.sort.selected);

  return (
    <div className={styles.tabs}>
      {sortOptions.map((option) => (
        <button
          key={option}
          onClick={() => dispatch(setSort(option))}
          className={`${styles.tab} ${selected === option ? styles.active : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SortTabs;
