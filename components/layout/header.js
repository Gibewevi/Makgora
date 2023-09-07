import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/">Mak'gora.live</Link>
      </h1>
      <p className="header__slogan">Be a champion... or just a joke!</p>
    </header>
  );
};

export default Header;