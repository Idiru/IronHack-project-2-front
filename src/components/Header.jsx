import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';


function Header() {
  return (
    <header>
    <div className="logo-container">
    <img src={logo} alt="verdeVogue Logo" className="logo" />
    </div>
      <nav>
        <div className="home-nav">
          <Link to="/" style={{ color: '#4A8300' }}>vV</Link>
          <Link to="/about">about</Link>
        </div>
        <div className="user-nav">
          <Link to="/signin">login</Link>
          <button className="btn-icon"><FontAwesomeIcon icon={faUser} /></button>
        </div>
      </nav>
      <nav>
        <div>
          <Link to="/">accessories</Link>
          <Link to="/">body</Link>
          <Link to="/">look</Link>
          <Link to="/">home</Link>
          <Link to="/">pets</Link>
        </div>

        <div className="search-bar">
          <div>
            <input type="text" placeholder="search" />
            <button className="btn-icon" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
          <div className="nav-icons">
            <Link  to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
