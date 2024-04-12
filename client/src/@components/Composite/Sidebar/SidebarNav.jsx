import moduleCss from './Sidebar.module.css';
const SidebarNav = ({ children, className }) => {
  return <nav className={className || moduleCss.sidebarNav}>{children}</nav>;
};

export default SidebarNav;
