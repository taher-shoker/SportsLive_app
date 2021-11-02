import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar ">
        <div className="navbar-brand">
              <button className="" type="button">
                <img src="icon.png" alt="logo" />
              </button>
              <Link to="/">
                <img src="logo.png" alt="logo" />
                <span>sportsLive</span>
              </Link>
            </div>
            <div className="links">
            <ul className="">
            <li>
                <img src="profile.png" alt="profile"/>
            </li>
            <li>
                <img src="search.png" alt="search"/>
            </li>
            <li>
                <img src="notification.png" alt=""/>
            </li>
            <li>
                <Link to="/allEmployees" className="btn call-api-btn"> Call API</Link>
            </li>
            </ul>
          </div>
  
    </nav>
  );
};

export default Header;
