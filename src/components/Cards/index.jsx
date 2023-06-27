import Card from "@components/Card";
import CardsStatus from "@components/CardsStatus";
import Button from "@ui/Button";
import Loader from "@ui/Loader";

import styles from "./styles.module.css";

function Cards({
  cardsData,
  totalBooksCount,
  isLoading,
  isLoadingMore,
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
        {!!cardsData &&
          !isLoading &&
          !error &&
          cardsData.map((card) => <Card key={card.bookEtag} info={card} />)}
      </div>

      {(!!cardsData &&
        !error &&
        cardsData.length !== parseInt(totalBooksCount, 10)) &&
        !isLoading && <Button onClick={handleLoadMore} value="Load more..." />}

      <div style={{ marginTop: "50px" }}>
        <Loader isActive={isLoading || isLoadingMore} />
      </div>
    </>
  );
}

export default Cards;
