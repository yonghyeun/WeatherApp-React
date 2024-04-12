import { useRouteError } from 'react-router-dom';

import moduleCss from './ErrorPage.module.css';
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={moduleCss.errorPage}>
      <h1>Oops!</h1>
      <p>
        <i s>errorStatus : {error.status}</i>
        <br />
        <i>{error.data || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
