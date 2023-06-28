import BookPage from '@pages/BookPage';
import HomePage from '@pages/HomePage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card/:id',
    element: <BookPage />,
  },
];

export default routes;
