import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Heading from '../components/Heading';
import Menu from '../components/Menu';
import Data from '../components/Data';

const App = () => {
  const [items, setItems] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const handleAddItem = item => {
    console.log(item);
  };

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: 'Online shop project',
        description: 'Added new features',
        amount: 200,
        type: 'income',
        categories: [{ id: 1, name: 'freelancing', color: 'pink' }],
        createdAt: '2021-02-06',
      },
      {
        id: 2,
        title: 'Buy a laptop',
        description: 'A new macbook air with M1 chip',
        amount: 1000,
        type: 'cost',
        categories: [{ id: 1, name: 'apple', color: 'grey' }],
        createdAt: '2021-03-15',
      },
    ]);
  }, []);

  return (
    <SimpleBar className="h-screen">
      <Container>
        <Heading />
        <Menu
          addItem={handleAddItem}
          status={openAddModal}
          open={handleOpenAddModal}
          close={handleCloseAddModal}
        />
        <Data data={items} />
      </Container>
    </SimpleBar>
  );
};

export default App;
