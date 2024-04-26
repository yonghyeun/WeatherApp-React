import useTheme from '../../../hooks/useTheme';
import moduleCss from './Sidebar.module.css';

import SidebarList from './SidebarList';
import SidebarNav from './SidebarNav';
import SidebarTitle from './SidebarTitle';
import SidebarUl from './SidebarUl';

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const className =
    theme === 'dark' ? moduleCss.sideBarDark : moduleCss.sideBarLight;
  if (!children) throw new Error('Sidebar 는 단독으로 사용 될 수 없어요');
  return (
    <section className={className}>
      <div className={theme}></div>
      {children}
    </section>
  );
};

Sidebar.Nav = SidebarNav;
Sidebar.Ul = SidebarUl;
Sidebar.List = SidebarList;
Sidebar.Title = SidebarTitle;

export default Sidebar;
