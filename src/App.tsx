import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import CountryDetail from './pages/CountryDetail';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

function NoRouteHere() {
  return <Navigate to="/" replace={true} />;
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          Component: Homepage,
        },
        {
          path: ':alpha3Code',
          Component: CountryDetail,
        },
      ],
    },
    {
      path: '*',
      Component: NoRouteHere,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
