// Layout import
import Sidebar from '../layouts/SideBar/Sidebar';
import Content from '../layouts/Content/Content';
// component import
import SidebarTitle from '../@components/UI/SidebarTitle/SidebarTitle';
import SidebarList from '../@components/UI/SidebarList/SidebarList';
// Style import
import style from './Page.module.css';

const DashboardPage = () => {
  // TODO react-router-dom 계층 만들고 NavLink 로 변경하기
  // TODO Sidebar 합성 컴포지션으로 변경 할 수 있도록 리팩토링 공부하기
  return (
    <section className={style.dashBoard}>
      <Sidebar title={<SidebarTitle />}>
        <SidebarList content='menu 1' to='/menu1' />
        <SidebarList content='menu 2' to='/menu2' />
        <SidebarList content='menu 3' to='/menu3' />
      </Sidebar>
      <Content />
    </section>
  );
};

export default DashboardPage;
