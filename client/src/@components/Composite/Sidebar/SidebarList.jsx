import { NavLink } from 'react-router-dom';
import moduleCss from './Sidebar.module.css';
import useTheme from '../../../hooks/useTheme';

const SidebarList = ({ to, content }) => {
  const theme = useTheme();
  const className =
    theme === 'dark' ? moduleCss.selectedDark : moduleCss.selectedLight;

  return (
    <li key={content} className={moduleCss.sidebarList}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? className : moduleCss.notSelected
        }
      >
        {content}
      </NavLink>
    </li>
  );
};
export default SidebarList;
