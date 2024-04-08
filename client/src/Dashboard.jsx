// import Context
import { ThemeProvider } from './context/ThemeProvider';
// import Component
import DashboardWrapper from './@components/UI/DashboardWrapper/DashboardWrapper';
// import Layout
import SidebarLayout from './layouts/SideBarLayout/SidebarLayout';
import ContentLayout from './layouts/ContentLayout/ContentLayout';
// import style

import './index.css';
const Dashboard = () => {
  // TODO react-router-dom 계층 만들고 NavLink 로 변경하기
  // TODO Sidebar 합성 컴포지션으로 변경 할 수 있도록 리팩토링 공부하기

  return (
    <ThemeProvider>
      <DashboardWrapper>
        <SidebarLayout />
        <ContentLayout />
      </DashboardWrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
