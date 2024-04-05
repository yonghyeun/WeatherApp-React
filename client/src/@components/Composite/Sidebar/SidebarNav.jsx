import moduleCss from './Sidebar.module.css';
import useTheme from '../../../hooks/useTheme';
const SidebarNav = ({ children, className }) => {
  const { theme } = useTheme();

  return (
    <nav
      style={{ ...theme.Default }}
      className={className || moduleCss.sidebarNav}
    >
      {children}
    </nav>
  );
};

export default SidebarNav;
