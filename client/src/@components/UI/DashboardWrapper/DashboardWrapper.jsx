import moduleCss from './DashboardWrapper.module.css';
import useTheme from '../../../hooks/useTheme';
const DashboardWrapper = ({ children }) => {
  const { theme } = useTheme();
  return (
    <section
      style={{ ...theme.Default }}
      className={moduleCss.dashBoardWrapper}
    >
      {children}
    </section>
  );
};

export default DashboardWrapper;
