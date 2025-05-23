import styles from './ShowMoreButton.module.scss';
import { useDispatch } from 'react-redux';
import { showMore } from '../../store/slices/uiSlice';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  return (
    <button className={styles.button} onClick={() => dispatch(showMore())}>
      Показать еще 5 билетов
    </button>
  );
};

export default ShowMoreButton;
