// Component import
import DashboardWrapper from '../@components/UI/DashboardWrapper/DashboardWrapper';

// Layout import
import Sidebar from '../layouts/SideBar/Sidebar';
import Content from '../layouts/Content/Content';

const DashboardPage = () => {
  // TODO react-router-dom 계층 만들고 NavLink 로 변경하기
  // TODO Sidebar 합성 컴포지션으로 변경 할 수 있도록 리팩토링 공부하기
  return (
    <DashboardWrapper>
      <Sidebar />
      <Content />
    </DashboardWrapper>
  );
};

export default DashboardPage;
