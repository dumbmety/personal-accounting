import React from 'react';

import SimpleBar from 'simplebar-react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const AddItem = ({ hide }) => {
  return (
    <form className="z-30">
      <div className="sidebar">
        <SimpleBar className="h-screen">
          <div className="h-full flex flex-col justify-between">
            <Header hide={hide} />
            <Content />
            <Footer hide={hide} />
          </div>
        </SimpleBar>
      </div>
    </form>
  );
};

export default AddItem;
