import { useRouteError } from 'react-router-dom';

import moduleCss from './ErrorPage.module.css';
import useTheme from '../../hooks/useTheme';
const ErrorPage = () => {
  const { theme } = useTheme();
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{ ...theme.Default }} className={moduleCss.errorPage}>
      <h1 style={{ ...theme.Default }}>Oops!</h1>
      <p style={{ ...theme.Default }}>
        <i style={{ ...theme.Default }}>errorStatus : {error.status}</i>
        <br />
        <i style={{ ...theme.Default }}>{error.data || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
