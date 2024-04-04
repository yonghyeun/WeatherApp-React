import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const SidebarList = ({ to, content, className }) => {
  return (
    <li key={content} className={className || style.sidebarList}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? style.selected : style.notSelected
        }
      >
        {content}
      </NavLink>
    </li>
  );
};

export default SidebarList;
