import Header from "@components/Header";
import useFetching from "@hooks/useFetching";
import BookPage from "@pages/BookPage";
import Home from "@pages/Home";
import BookService from "@services/SearchService";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [cardsData, setCardsData] = useState(null);
  const [totalBooksCount, setTotalBooksCount] = useState(0);
  const [page, setPage] = useState(1);

  const getBooksList = (data) =>
    data.map((book) => ({
      bookId: book.id,
      bookEtag: book.etag,
      title: book.volumeInfo.title,
      category: book.volumeInfo.categories,
      authors: book.volumeInfo.title,
      urlImage: !book.volumeInfo.imageLinks
        ? ""
        : book.volumeInfo.imageLinks.smallThumbnail,
    }));

  const [fetchSearch, isLoading, error] = useFetching(async (searchParams) => {
    const data = await BookService.getBooks(searchParams);
    
    setTotalBooksCount(data.totalItems);
    setCardsData(getBooksList(data.items));
  }, searchData);

  const navigate = useNavigate();

  const handleStartSearch = (formData) => {
    navigate("/");
    setSearchData(formData);

    fetchSearch(formData);
  };

  const handleLoadMore = async () => {
    const data = await BookService.getBooks(searchData, page);

    setPage((prev) => prev + 1);
    setCardsData([...cardsData, ...getBooksList(data.items)]);
  };

  return (
    <>
      <Header onStartSearch={handleStartSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              totalBooksCount={totalBooksCount}
              handleLoadMore={handleLoadMore}
              cardsData={cardsData}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route path="/card/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
