import moduleCss from './DashboardWrapper.module.css';

const DashboardWrapper = ({ children }) => {
  return <section className={moduleCss.dashBoardWrapper}>{children}</section>;
};

export default DashboardWrapper;
