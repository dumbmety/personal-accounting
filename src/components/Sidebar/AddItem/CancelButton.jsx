import React from 'react';

const CancelButton = ({ hide }) => {
  return (
    <button
      onClick={hide}
      type="button"
      className="text-gray-700 border border-gray-300 hover:bg-gray-100 focus:bg-gray-100 mr-2 py-2 px-4 rounded-md focus:outline-none"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
