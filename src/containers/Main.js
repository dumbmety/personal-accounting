import React, { useEffect, useState } from 'react';

import AddItem from '../components/Sidebar/AddItem/AddItem';
import Header from '../components/Header/Header';
import Menu from '../components/Main/Menu/Menu';
import Table from '../components/Main/Table/Table';
import Backdrop from '../components/Elements/Backdrop/Backdrop';
import Sidebar from '../components/Elements/Sidebar/Sidebar';

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: 'Online shop project',
        amount: 200,
        type: 'income',
        categories: ['freelancing'],
        createdAt: 'Feb 06, 2021',
      },
      {
        id: 2,
        title: 'Buy a laptop',
        amount: 1000,
        type: 'cost',
        categories: ['apple'],
        createdAt: 'Feb 15, 2021',
      },
    ]);
  }, []);

  const showSidebarHandler = () => setShowSidebar(true);
  const hideSidebarHandler = () => setShowSidebar(false);

  const addItemHandler = (event, title, amount, type, categories) => {
    event.preventDefault();
    const data = [...items];

    const item = {
      id: items.length + 1,
      title,
      amount,
      type,
      categories: categories.split(','),
      createdAt: Date.now(),
    };

    data.push(item);
    setItems(data);
  };

  return (
    <>
      <div className="container mx-auto py-16 px-6">
        <Backdrop show={showSidebar} hide={hideSidebarHandler} />
        <Sidebar show={showSidebar}>
          <AddItem hide={hideSidebarHandler} add={addItemHandler} />
        </Sidebar>
        <Header />
        <Menu showSidebar={showSidebarHandler} />
        <Table data={items} />
      </div>
    </>
  );
};

export default Main;
