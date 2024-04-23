import React from 'react';
import useLocation from '../../hooks/useLocation';
import useTimeState from '../../hooks/useTimeState';
import Sidebar from '../../@components/Composite/Sidebar/Sidebar';

const SidebarLayout = () => {
  const { lat, lon } = useLocation();
  const { date } = useTimeState();
  return (
    <Sidebar>
      <Sidebar.Title />
      <Sidebar.Nav>
        <Sidebar.Ul>
          <Sidebar.List
            to={`/menu1?date=${date}&lat=${lat}&lon=${lon}`}
            content='기상예보'
          />
          <Sidebar.List to='/menu2' content='menu2' />
          <Sidebar.List to='/menu3' content='menu3' />
        </Sidebar.Ul>
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SidebarLayout;
