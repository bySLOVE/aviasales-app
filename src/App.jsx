import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import SortTabs from './components/SortTabs/SortTabs'
import TicketList from './components/TicketList/TicketList';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>
          <SortTabs />
          <TicketList />
          <ShowMoreButton />
        </section>
      </main>
    </div>
  );
};

export default App
