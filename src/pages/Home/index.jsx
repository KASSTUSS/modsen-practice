import Main from "@components/Main";

function Home({
  cardsData,
  isLoading,
  handleLoadMore,
  totalBooksCount,
  error,
}) {
  return (
    <Main
      totalBooksCount={totalBooksCount}
      handleLoadMore={handleLoadMore}
      cardsData={cardsData}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Home;
