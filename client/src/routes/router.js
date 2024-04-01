import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import App from '../App.js';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
]);

export default router;
