import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from '@pages/Layout/Layout';
import Main from '@pages/Main/Main';
import Cart from '@pages/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Navigate to={'/'} />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
