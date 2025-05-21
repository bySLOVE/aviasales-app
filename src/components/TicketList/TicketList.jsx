import styles from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList = ({ tickets, loading, error }) => {
  if (loading) return <p className={styles.message}>Загрузка билетов...</p>;
  if (error) return <p className={styles.message}>Ошибка: {error}</p>;
  if (tickets.length === 0) return <p className={styles.message}>Билеты не найдены</p>;

   return (
    <div className={styles.list}>
      {tickets.slice(0, 10).map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketList;
