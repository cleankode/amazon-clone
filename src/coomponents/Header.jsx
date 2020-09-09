import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

import "./Header.css";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links  */}
      

      {/* basket icon with a number */}
    </nav>
  );
}

export default Header;
