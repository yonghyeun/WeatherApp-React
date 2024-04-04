import style from './Sidebar.module.css';

const SidebarNav = ({ children, className }) => {
  return <nav className={className || style.sidebarNav}>{children}</nav>;
};

export default SidebarNav;
