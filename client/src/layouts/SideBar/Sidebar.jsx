import style from './SideBar.module.css';
import React from 'react';

const SideBar = ({ title, children }) => {
  return (
    <nav className={style.sideBar}>
      {title}
      <ul>{children}</ul>
    </nav>
  );
};

export default SideBar;
