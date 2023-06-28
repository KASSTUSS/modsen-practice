export const searchBooks = ({ booksList, totalBooksCount }) => ({
  type: 'SEARCH_BOOKS',
  booksList,
  totalBooksCount,
});

export const loadMoreBooks = ({ booksList }) => ({
  type: 'LOAD_MORE_BOOKS',
  booksList,
});

export const setSearchParamsContext = ({ searchParams }) => ({
  type: 'SET_SERACH_PARAMS',
  searchParams,
});
