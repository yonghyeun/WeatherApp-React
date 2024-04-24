import moduleCss from './ContentMain.module.css';
import useFetchingWeatherAir from '../../../hooks/useFetchingWeatherAir';
import { Outlet } from 'react-router-dom';
const ContentMain = () => {
  useFetchingWeatherAir();
  return (
    <main className={moduleCss.contentMain}>
      <Outlet />
    </main>
  );
};

export default ContentMain;
