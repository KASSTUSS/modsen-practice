import Card from "@components/Card";
import CardsStatus from "@components/CardsStatus";
import Button from "@ui/Button";
import Loader from "@ui/Loader";

import styles from "./styles.module.css";

function Cards({
  cardsData,
  totalBooksCount,
  isLoading,
  handleLoadMore,
  error,
}) {
  return (
    <>
      <CardsStatus
        error={error}
        isLoading={isLoading}
        totalBooksCount={totalBooksCount}
      />

      <div className={styles.cards}>
        {isLoading ? (
          <Loader isActive={isLoading} />
        ) : (
          !!cardsData &&
          cardsData.map((card) => <Card key={card.bookEtag} info={card} />)
        )}
      </div>

      {!!cardsData && !isLoading && (
        <Button onClick={handleLoadMore} value="Load more..." />
      )}
    </>
  );
}

export default Cards;
