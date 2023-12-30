import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/basepage.css';
import { isCookiePresent, handleLogout } from '../assets/js/helpers.js'; // Add handleLogout here
import logo from '../assets/img/logo-white.png';
import loginImage from '../assets/img/login-image.png';
import profile from '../assets/img/drinking.gif';
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
            <img src={profile} alt="User" className="user-icon" onClick={toggleDropdown}/>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/profile">Profile - {username}</Link>
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
