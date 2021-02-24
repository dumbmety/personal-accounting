import React from 'react';

import 'boxicons';

const Button = ({ text, icon, classes = '' }) => {
  return (
    <button className={`action__button ${classes}`}>
      <box-icon
        name={icon}
        type="regular"
        size="22px"
        color="#4B5563"
      ></box-icon>
      <span>{text}</span>
    </button>
  );
};

export default Button;
