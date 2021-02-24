import React from 'react';

const Header = ({ hide }) => {
  return (
    <header className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-100">
      <h2 className="text-lg font-semibold">Add new item</h2>
      <button onClick={hide} type="button" className="focus:outline-none">
        <box-icon name="x" size="sm" color="#6B7280"></box-icon>
      </button>
    </header>
  );
};

export default Header;
