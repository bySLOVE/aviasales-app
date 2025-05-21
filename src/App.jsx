import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from './store/slices/ticketsSlice';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SortTabs from './components/SortTabs/SortTabs';
import TicketList from './components/TicketList/TicketList';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>
          <SortTabs />
          <TicketList tickets={tickets} loading={loading} error={error} />
          <ShowMoreButton />
        </section>
      </main>
    </div>
  );
};

export default App;
