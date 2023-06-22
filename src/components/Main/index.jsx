import Cards from "@components/Cards";

import styles from "./styles.module.css";

function Main({
  cardsData,
  isLoading,
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
        error={error}
      />
    </main>
  );
}

export default Main;
