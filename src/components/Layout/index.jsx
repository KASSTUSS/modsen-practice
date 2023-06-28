import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
