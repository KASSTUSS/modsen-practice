import styles from "./styles.module.css";

function CardsStatus({ totalBooksCount, isLoading, error }) {
  const message = totalBooksCount
    ? `Found ${totalBooksCount} results`
    : "Start search any books!";

  return (
    <h1 className={styles.cards__status}>
      {!isLoading && (!error ? message : "Books not found!")}
    </h1>
  );
}

export default CardsStatus;
