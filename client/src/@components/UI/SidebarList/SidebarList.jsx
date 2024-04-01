// TODO react-router-dom 설계하고 NavLink 로 변경하기
import { NavLink } from 'react-router-dom';

import style from './SidebarList.module.css';

const SidebarList = ({ to, content }) => {
  return (
    <li key={content} className={style.sidebarList}>
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
