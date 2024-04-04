import style from './ContentMain.module.css';
import { Outlet } from 'react-router-dom';

const ContentMain = () => {
  return (
    <main className={style.contentMain}>
      <Outlet />
    </main>
  );
};

export default ContentMain;
