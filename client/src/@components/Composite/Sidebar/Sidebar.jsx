// TODO 리팩토링 하자 합성 컴포넌트 패턴으로 가보자고

import style from './Sidebar.module.css';

import SidebarList from './SidebarList';
import SidebarNav from './SidebarNav';
import SidebarTitle from './SidebarTitle';
import SidebarUl from './SidebarUl';

const Sidebar = ({ children, className }) => {
  if (!children) throw new Error('Sidebar 는 단독으로 사용 될 수 없어요');
  return <section className={className || style.sideBar}>{children}</section>;
};

Sidebar.Nav = SidebarNav;
Sidebar.Ul = SidebarUl;
Sidebar.List = SidebarList;
Sidebar.Title = SidebarTitle;

export default Sidebar;
