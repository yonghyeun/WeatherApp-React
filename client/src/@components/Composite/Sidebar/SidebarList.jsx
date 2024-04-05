import { NavLink } from 'react-router-dom';
import moduleCss from './Sidebar.module.css';

import useTheme from '../../../hooks/useTheme';

const SidebarList = ({ to, content, className }) => {
  const { theme } = useTheme();

  return (
    <li
      style={{ ...theme.Default }}
      key={content}
      className={className || moduleCss.sidebarList}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? moduleCss.selected : moduleCss.notSelected
        }
      >
        {content}
      </NavLink>
    </li>
  );
};

export default SidebarList;
