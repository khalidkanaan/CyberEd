import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/basepage.css';
import { isCookiePresent, handleLogout } from '../assets/js/helpers.js'; 
import logo from '../assets/img/logo-white.png';
import loginImage from '../assets/img/login-image.png';
import Cookies from 'js-cookie';

function BasePage(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const isLoggedIn = isCookiePresent('TEST-AUTH');
  const username = Cookies.get('username');

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
        {!isLoggedIn ? (
          <Link to="/login" className='img-container'>
            <div className="login-text">Login</div>
            <img className='login-img' src={loginImage} alt="Login" />
          </Link>
        ) : (
          <div className="dropdown">
            <div className='img-container' onClick={toggleDropdown}>
              <div className="login-text">{username}</div>
              <img className='logout-img' src={loginImage} alt="Login" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <span className="unclickable-link">Profile - {username}</span>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </div>
            )}
          </div>
        )}
      </div>
      <div  className='base-wrapper'>
        {props.children}
      </div>
    </div>
  );
}  

export default BasePage;
