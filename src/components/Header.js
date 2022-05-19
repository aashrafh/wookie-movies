import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="wookie_header">
      <Link to="/" className="logo">
        WOOKIE MOVIES
      </Link>
      <form className="search">
        <input className="search" type="search" placeholder="Search..." />
      </form>
    </header>
  );
};

export default Header;
