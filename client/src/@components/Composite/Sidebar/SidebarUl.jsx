import style from './Sidebar.module.css';

const SidebarUl = ({ children, className }) => {
  return <ul className={className || style.sidebarUl}>{children}</ul>;
};

export default SidebarUl;
