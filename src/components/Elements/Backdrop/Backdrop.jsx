import React from 'react';

const Backdrop = ({ hide, show }) => {
  return show ? (
    <div
      onClick={hide}
      className="fixed top-0 right-0 z-10 w-full h-full bg-black bg-opacity-50 transition duration-500 ease-out"
    ></div>
  ) : null;
};

export default Backdrop;
