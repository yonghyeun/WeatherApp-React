import { createBrowserRouter } from 'react-router-dom';
// Element import
import Dashboard from '../Dashboard.jsx';

// Page import
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import AboutPage from '../pages/AboutPage/AboutPage.jsx';
import MenuPage from '../pages/MenuPage/MenuPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/:menuId',
        element: <MenuPage />,
      },
    ],
  },
]);

export default router;
