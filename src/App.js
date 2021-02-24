import React from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Main from './containers/Main';

const App = () => {
  return (
    <SimpleBar className="h-screen">
      <Main />
    </SimpleBar>
  );
};

export default App;
