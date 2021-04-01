import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Heading from '../components/Heading';
import Menu from '../components/Menu';
import Data from '../components/Data';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: 'Online shop project',
        amount: 200,
        type: 'income',
        categories: ['freelancing'],
        createdAt: '2021-02-06',
      },
      {
        id: 2,
        title: 'Buy a laptop',
        amount: 1000,
        type: 'cost',
        categories: ['apple'],
        createdAt: '2021-03-15',
      },
    ]);
  }, []);

  return (
    <SimpleBar className="h-screen">
      <Container>
        <Heading />
        <Menu />
        <Data data={items} />
      </Container>
    </SimpleBar>
  );
};

export default App;
