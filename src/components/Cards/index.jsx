import BookService from '@api/SearchService';
import Card from '@components/Card';
import CardsStatus from '@components/CardsStatus';
import Button from '@ui/Button';
import Loader from '@ui/Loader';
import { memo, useContext, useEffect, useState } from 'react';

import {
  booksActions,
  BooksContext,
  dispatchBooks,
} from '@/contexts/BooksContext';

import useFetching from '../../hooks/useFetching';
import styles from './styles.module.css';

let searchParamsPrev = null;

function Cards() {
  const { books, totalBooksCount, searchParams } = useContext(BooksContext);
  const [isFoundedBooks, setIsFoindedBooks] = useState(true);

  const [fetchSearch, isLoading, error] = useFetching(async searchData => {
    const fetchingBooksData = await BookService.getBooks(searchData);

    setIsFoindedBooks(!!fetchingBooksData.items);

    dispatchBooks(
      booksActions.searchBooks({
        booksList: fetchingBooksData.items,
        totalBooksCount: fetchingBooksData.totalItems,
      }),
    );
  });

  useEffect(() => {
    if (searchParams !== searchParamsPrev) {
      searchParamsPrev = searchParams;
      fetchSearch(searchParams);
    }
  }, [searchParams]);

  const [fetchLoadMore, isLoadingMore, errorLoadMore] = useFetching(
    async searchData => {
      const fetchingBooksData = await BookService.getBooks(
        searchData,
        books.length,
      );

      dispatchBooks(
        booksActions.loadMoreBooks({
          booksList: fetchingBooksData.items,
        }),
      );
    },
  );

  const handleLoadMore = async () => {
    if (searchParamsPrev) {
      await fetchLoadMore(searchParamsPrev);
    }
  };

  return (
    <>
      <CardsStatus
        error={error || !isFoundedBooks}
        isLoading={isLoading}
        totalBooksCount={totalBooksCount}
      />

      <div className={styles.cards}>
        {!!books && books.map(card => <Card key={card.bookEtag} info={card} />)}
      </div>

      {!!books &&
        !errorLoadMore &&
        books.length !== parseInt(totalBooksCount, 10) && (
          <Button onClick={handleLoadMore} value='Load more...' />
        )}

      <div style={{ marginTop: '50px' }}>
        <Loader isActive={isLoading || isLoadingMore} />
      </div>
    </>
  );
}

export default memo(Cards);
