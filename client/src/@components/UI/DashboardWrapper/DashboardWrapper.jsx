import useTheme from '../../../hooks/useTheme';
import moduleCss from './DashboardWrapper.module.css';

const DashboardWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <section className={`${moduleCss.dashBoardWrapper} ${theme}`}>
      {children}
    </section>
  );
};

export default DashboardWrapper;
