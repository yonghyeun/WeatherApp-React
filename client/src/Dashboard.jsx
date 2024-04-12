// import Context
import { Provider } from 'react-redux';

// import Component
import DashboardWrapper from './@components/UI/DashboardWrapper/DashboardWrapper';
// import Layout
import SidebarLayout from './layouts/SideBarLayout/SidebarLayout';
import ContentLayout from './layouts/ContentLayout/ContentLayout';

// import store
import store from './store/store';

const Dashboard = () => {
  return (
    <Provider store={store}>
      <DashboardWrapper>
        <SidebarLayout />
        <ContentLayout />
      </DashboardWrapper>
    </Provider>
  );
};

export default Dashboard;
