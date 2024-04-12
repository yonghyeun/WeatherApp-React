import moduleCss from './Sidebar.module.css';

const SidebarUl = ({ children, className }) => {
  return <ul className={className || moduleCss.sidebarUl}>{children}</ul>;
};

export default SidebarUl;
