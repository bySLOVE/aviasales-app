import Ticket from '../Ticket/Ticket';
import { useSelector } from 'react-redux';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const error = useSelector((state) => state.tickets.error);
  const loading = useSelector((state) => state.tickets.loading);
  const visibleCount = useSelector((state) => state.ui.visibleCount);
  const selectedTransfers = useSelector((state) => state.filters.selected);
  const selectedSort = useSelector((state) => state.sort.selected);

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (tickets.length === 0 && loading) {
    return <p>Загрузка билетов...</p>;
  }

  const filteredTickets = tickets.filter((ticket) =>
    ticket.segments.every((segment) => selectedTransfers.includes(segment.stops.length))
  );

  if (tickets.length > 0 && filteredTickets.length === 0) {
    return <p>Билеты не найдены</p>;
  }

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (selectedSort === 'Самый дешевый') {
      return a.price - b.price;
    }
    if (selectedSort === 'Самый быстрый') {
      const timeA = a.segments[0].duration + a.segments[1].duration;
      const timeB = b.segments[0].duration + b.segments[1].duration;
      return timeA - timeB;
    }
    if (selectedSort === 'Оптимальный') {
      const scoreA = a.price + a.segments[0].duration + a.segments[1].duration;
      const scoreB = b.price + b.segments[0].duration + b.segments[1].duration;
      return scoreA - scoreB;
    }
    return 0;
  });

  const maxVisible = Math.min(visibleCount, sortedTickets.length);
  const visibleTickets = sortedTickets.slice(0, maxVisible);

  return (
    <div>
      {visibleTickets.map((ticket, index) => (
        <Ticket key={`${ticket.price}-${ticket.carrier}-${index}`} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
