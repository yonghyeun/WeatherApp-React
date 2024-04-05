import moduleCss from './ContentMain.module.css';
import { Outlet } from 'react-router-dom';

const ContentMain = () => {
  return (
    <main className={moduleCss.contentMain}>
      <Outlet />
    </main>
  );
};

export default ContentMain;
