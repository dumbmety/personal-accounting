import React from 'react';

const Sidebar = ({ children, show }) => {
  return (
    <div
      className="fixed top-0 right-0 w-full sm:w-1/2 lg:w-1/3 h-full z-20 bg-white transition duration-300 ease-out"
      style={{
        transform: show ? 'translateX(0)' : 'translateX(100%)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  );
};

export default Sidebar;
