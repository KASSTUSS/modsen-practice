import Router from '@components/Router';

import { BooksProvider } from './contexts/BooksContext/provider';

function App() {
  return (
    <BooksProvider>
      <Router />
    </BooksProvider>
  );
}

export default App;
