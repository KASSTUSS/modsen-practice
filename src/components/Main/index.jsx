import Cards from '@components/Cards';

import styles from './styles.module.css';

function Main({
  cardsData,
  isLoading,
  isLoadingMore,
  handleLoadMore,
  totalBooksCount,
  error,
}) {
  return (
    <main className={styles.main}>
      <Cards
        totalBooksCount={totalBooksCount}
        handleLoadMore={handleLoadMore}
        cardsData={cardsData}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        error={error}
      />
    </main>
  );
}

export default Main;
