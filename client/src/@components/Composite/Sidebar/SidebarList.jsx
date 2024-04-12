import { NavLink } from 'react-router-dom';
import moduleCss from './Sidebar.module.css';

const SidebarList = ({ to, content, className }) => {
  return (
    <li key={content} className={className || moduleCss.sidebarList}>
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
