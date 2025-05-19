import styles from './SortTabs.module.scss';

const tabs = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

const SortTabs = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, idx) => (
        <button key={idx} className={styles.tab}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SortTabs;