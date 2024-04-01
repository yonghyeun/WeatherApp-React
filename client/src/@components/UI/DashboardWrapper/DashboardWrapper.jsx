import style from './DashboardWrapper.module.css';

const DashboardWrapper = ({ children }) => {
  return <section className={style.dashBoardWrapper}>{children}</section>;
};

export default DashboardWrapper;
