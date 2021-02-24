import React from 'react';

import Button from './Button';

const Menu = () => {
  return (
    <header className="main__header">
      <div className="header__actions">
        <Button text="Filter" icon="filter-alt" />
        <Button text="Sort" icon="sort-alt-2" />
        <Button text="Search" icon="search" />
      </div>
      <div>
        <Button text="Add item" icon="plus" classes="mr-0" />
      </div>
    </header>
  );
};

export default Menu;
