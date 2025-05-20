import styles from './Ticket.module.scss';

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>13 400 Р</div>
        <img src="https://pics.avs.io/99/36/S7.png" alt="S7 Airlines" className={styles.logo} />
      </div>

      <div className={styles.segment}>
        <div className={styles.infoBlock}>
          <div className={styles.label}>MOW – NKT</div>
          <div className={styles.value}>10:45 – 08:00</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.label}>В ПУТИ</div>
          <div className={styles.value}>21ч 15м</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.label}>2 ПЕРЕСАДКИ</div>
          <div className={styles.value}>HKG, JNB</div>
        </div>
      </div>

      <div className={styles.segment}>
        <div className={styles.infoBlock}>
          <div className={styles.label}>MOW – NKT</div>
          <div className={styles.value}>11:20 – 00:50</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.label}>В ПУТИ</div>
          <div className={styles.value}>13ч 30м</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.label}>1 ПЕРЕСАДКА</div>
          <div className={styles.value}>HKG</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
