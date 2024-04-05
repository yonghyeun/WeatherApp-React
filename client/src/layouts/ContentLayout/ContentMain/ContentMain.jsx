import moduleCss from './ContentMain.module.css';
import { Outlet } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme';
const ContentMain = () => {
  const { theme } = useTheme();
  return (
    <main style={{ ...theme.Default }} className={moduleCss.contentMain}>
      <Outlet />
    </main>
  );
};

export default ContentMain;
