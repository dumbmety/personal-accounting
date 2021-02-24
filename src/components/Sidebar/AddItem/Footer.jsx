import React from 'react';

import AddButton from './AddButton';
import CancelButton from './CancelButton';

const Footer = ({ hide }) => {
  return (
    <footer className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-end">
      <CancelButton hide={hide} />
      <AddButton />
    </footer>
  );
};

export default Footer;
