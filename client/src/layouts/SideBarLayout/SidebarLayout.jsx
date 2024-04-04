import React from 'react';

import Sidebar from '../../@components/Composite/Sidebar/Sidebar';

const SidebarLayout = () => {
  return (
    <Sidebar>
      <Sidebar.Title />
      <Sidebar.Nav>
        <Sidebar.Ul>
          <Sidebar.List to='/menu1' content='menu1' />
          <Sidebar.List to='/menu2' content='menu2' />
          <Sidebar.List to='/menu3' content='menu3' />
        </Sidebar.Ul>
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SidebarLayout;
