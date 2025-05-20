import styles from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  return (
    <div className={styles.ticketList}>
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketList;
