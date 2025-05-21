import styles from './Ticket.module.scss';

const formatDuration = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}ч ${m}м`;
};

const formatTimeRange = (date, duration) => {
  const start = new Date(date);
  const end = new Date(start.getTime() + duration * 60000);

  const format = (d) =>
    d.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });

  return `${format(start)} – ${format(end)}`;
};

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{price.toLocaleString('ru-RU')} Р</div>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`Авиакомпания ${carrier}`} className={styles.logo} />
      </div>

      {segments.map((segment, idx) => (
        <div className={styles.segment} key={idx}>
          <div className={styles.infoBlock}>
            <div className={styles.label}>
              {segment.origin} – {segment.destination}
            </div>
            <div className={styles.value}>{formatTimeRange(segment.date, segment.duration)}</div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.label}>В ПУТИ</div>
            <div className={styles.value}>{formatDuration(segment.duration)}</div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.label}>
              {segment.stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${segment.stops.length} ПЕРЕСАДКИ`}
            </div>
            <div className={styles.value}>{segment.stops.length === 0 ? '—' : segment.stops.join(', ')}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
