import styles from './ShowMoreButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showMore } from '../../store/slices/uiSlice';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  const tickets = useSelector((state) => state.tickets.tickets);
  const visibleCount = useSelector((state) => state.ui.visibleCount);
  const selectedTransfers = useSelector((state) => state.filters.selected);

  const filtersEnabled = selectedTransfers.length > 0;

  if (!filtersEnabled) return null;

  if (visibleCount >= tickets.length) return null;

  return (
    <button className={styles.button} onClick={() => dispatch(showMore())}>
      Показать еще 5 билетов
    </button>
  );
};

export default ShowMoreButton;
