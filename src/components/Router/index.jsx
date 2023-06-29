import Layout from '@components/Layout';
import routes from '@constants/routes';
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default Router;
