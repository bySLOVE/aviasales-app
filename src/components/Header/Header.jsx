import styles from './Header.module.scss';
import planeImage from '../../assets/plane.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={planeImage} alt="Aviasales Logo" />
    </header>
  );
};

export default Header;
