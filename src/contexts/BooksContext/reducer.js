import getBooksList from '@/utils';

export const initialState = {
  books: [],
  searchParams: null,
  totalBooksCount: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS': {
      return {
        searchParams: state.searchParams,
        totalBooksCount: action.totalBooksCount,
        books: getBooksList(action.booksList),
      };
    }
    case 'LOAD_MORE_BOOKS': {
      return {
        searchParams: state.searchParams,
        totalBooksCount: state.totalBooksCount,
        books: [...state.books, ...getBooksList(action.booksList)],
      };
    }
    case 'SET_SERACH_PARAMS': {
      return {
        searchParams: action.searchParams,
        totalBooksCount: 0,
        books: [],
      };
    }
    default: {
      return state;
    }
  }
};
