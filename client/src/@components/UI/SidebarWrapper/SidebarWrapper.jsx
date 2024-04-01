import style from './SidebarWrapper.module.css';
import React from 'react';

// TODO Wrapper 인터페이스가 꼭 필요한가 ? 생각해보기
const SidebarWrapper = ({ title, children }) => {
  return (
    <nav className={style.sideBarWrapper}>
      {title}
      <ul>{children}</ul>
    </nav>
  );
};

export default SidebarWrapper;
