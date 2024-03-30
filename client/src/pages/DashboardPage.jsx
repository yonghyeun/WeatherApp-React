import Sidebar from '../layouts/SideBar/Sidebar';
import Content from '../layouts/Content/Content';
import style from './Page.module.css';
const DashboardPage = () => {
  // TODO SEO 태그 결정하기
  return (
    <article className={style.dashBoard}>
      <Sidebar />
      <Content />
    </article>
  );
};

export default DashboardPage;
