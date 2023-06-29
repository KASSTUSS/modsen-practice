import { useReducer } from 'react';

import { BooksContext } from './context';
import { initialState, reducer } from './reducer';

export let dispatchBooks = null;

export function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  dispatchBooks = dispatch;

  return (
    <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
  );
}
