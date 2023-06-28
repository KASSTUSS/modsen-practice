import Layout from '@components/Layout';
import BookPage from '@pages/BookPage';
import HomePage from '@pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const paths = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card/:id',
    element: <BookPage />,
  },
];

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {paths.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default Router;
