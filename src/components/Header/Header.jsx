import React from 'react';

const Header = () => {
  return (
    <header id="main-header">
      <h1 className="main-header__title">Personal Accounting</h1>
      <p className="main-header__text">
        Created by{' '}
        <a
          className="main-header__text--link"
          href="https://github.com/neysidev"
          target="_blank"
          rel="noreferrer"
        >
          Mehdi Neysi
        </a>
      </p>
    </header>
  );
};

export default Header;
