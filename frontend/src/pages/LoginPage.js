import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import '../assets/css/forms.css';
import logo from '../assets/img/CyberEd.png';
import Cookies from 'js-cookie';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const [showGuestMessage, setShowGuestMessage] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });

    if (!response.ok) {
      const message = "Invalid email or password, please try again"
      setError(message);
      return;
    }

    // Handles successful login here
    const data = await response.json();
    Cookies.set('username', data.username, { expires: 7 }); 
    Cookies.set('progress', data.progress, { expires: 7 }); 

    // Show success message and then redirect to main page
    setShowSuccessMessage(true);
    setTimeout(() => {
      navigate('/');
    }, 1000); 
  };

  const handleGuest = async (event) => {
    event.preventDefault(); // Prevent default form submission  
    Cookies.set('TEST-AUTH', '123', { expires: 7 });
    Cookies.set('username', 'GuestUser', { expires: 7 });
    Cookies.set('progress', 0);
  
    // Show success message and then redirect to main page
    setShowGuestMessage(true);
    setTimeout(() => {
      setShowGuestMessage(false);
      navigate('/');
    }, 1000);
  };

  useEffect(() => {
    let timer1, timer2, timer3;
    if (error) {
        timer1 = setTimeout(() => {
            setIsFading(true);
            timer2 = setTimeout(() => {
                setIsCollapsing(true);
                timer3 = setTimeout(() => {
                    setError(null);
                    setIsFading(false);
                    setIsCollapsing(false);
                }, 500); // remove after 0.5s
            }, 2500); // start collapsing after 2.5s
        }, 2000); // start fading out after 2s
    }
    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, [error]);

  return (
    <BasePage>
      <div className="lr-container">
        <form className="lr-form" onSubmit={handleSubmit}>
          <img className="logo-class" src={logo} alt="CyberEd.png"/>

            <div className="input-container">
              <label>EMAIL</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <label>PASSWORD</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit">LOGIN</button>
            <button className='guestButton' onClick={handleGuest}>Try Guest Account!</button>

          <div className={`add-bottom-margin ${isCollapsing ? 'collapse' : ''}`}>
            {error && <div className={`${isFading ? 'fade-out' : ''}`}>{error}</div>}
            {showSuccessMessage && <div>Successful Login! ✔</div>}
          </div>
          <div className={`add-bottom-margin ${isCollapsing ? 'collapse' : ''}`}>
            {error && <div className={`${isFading ? 'fade-out' : ''}`}>{error}</div>}
            {showGuestMessage && <div>Guest Logged in! ✔</div>}
          </div>
          <Link to="/register">
            No account? Sign up here
          </Link>
        </form>
      </div>
    </BasePage>
  );
}

export default LoginPage;
