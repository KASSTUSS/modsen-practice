import SearchForm from '@components/SearchForm';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Search for books</h1>
      <SearchForm />
    </header>
  );
}

export default Header;
