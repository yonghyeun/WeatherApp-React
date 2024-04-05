import moduleCss from './Sidebar.module.css';
import useTheme from '../../../hooks/useTheme';

const SidebarUl = ({ children, className }) => {
  const { theme } = useTheme();
  return (
    <ul
      style={{ ...theme.Default }}
      className={className || moduleCss.sidebarUl}
    >
      {children}
    </ul>
  );
};

export default SidebarUl;
