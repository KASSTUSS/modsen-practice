import Main from "@components/Main";

function Home({
  cardsData,
  isLoading,
  handleLoadMore,
  totalBooksCount,
  isLoadingMore,
  error,
}) {
  return (
    <Main
      totalBooksCount={totalBooksCount}
      handleLoadMore={handleLoadMore}
      cardsData={cardsData}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      error={error}
    />
  );
}

export default Home;
