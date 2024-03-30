import style from './SideBar.module.css';

const SideBar = ({ children }) => {
  return <nav className={style.sideBar}>{children}</nav>;
};

export default SideBar;
