import React, { useState } from 'react';

import AddItem from '../components/Sidebar/AddItem/AddItem';
import Backdrop from '../components/Elements/Backdrop/Backdrop';
import Header from '../components/Header/Header';
import Menu from '../components/Main/Menu/Menu';
import Sidebar from '../components/Elements/Sidebar/Sidebar';
import Table from '../components/Main/Table/Table';

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => setShowSidebar(true);
  const hideSidebarHandler = () => setShowSidebar(false);

  return (
    <>
      <div className="container mx-auto py-16 px-6">
        <Backdrop show={showSidebar} hide={hideSidebarHandler} />
        <Sidebar show={showSidebar}>
          <AddItem hide={hideSidebarHandler} />
        </Sidebar>
        <Header />
        <Menu showSidebar={showSidebarHandler} />
        <Table />
      </div>
    </>
  );
};

export default Main;
