import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import '../assets/css/forms.css';
import logo from '../assets/img/CyberEd.png';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const response = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password }),
      credentials: 'include'
    });
  
    if (!response.ok) {
      const data = await response.json();
      let message = "Registration failed, please try again";
      message = data;
      setError(message);
      return;
    }
  
    // Redirect to login page upon successful registration
    navigate('/login');
  };

  useEffect(() => {
    let timer1, timer2, timer3;
    if (error && !Array.isArray(error)) {
      timer1 = setTimeout(() => {
        setIsFading(true);
        timer2 = setTimeout(() => {
          setIsCollapsing(true);
          timer3 = setTimeout(() => {
            setError(null);
            setIsFading(false);
            setIsCollapsing(false);
          }, 500);
        }, 2500);
      }, 2000);
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
            <label>USERNAME</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="input-container">
            <label>EMAIL</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className={`input-container ${passwordError ? 'error' : ''}`}>
            <label>PASSWORD</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className={`input-container ${passwordError ? 'error' : ''}`}>
            <label>CONFIRM PASSWORD</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit">REGISTER</button>
          <div className={`add-bottom-margin ${Array.isArray(error) ? '' : `${isCollapsing ? 'collapse' : ''}`}`}>
            {error && (
              <div className={Array.isArray(error) ? '' : `${isFading ? 'fade-out' : ''}`}>
                {Array.isArray(error) 
                  ? error.map((err, index) => <div key={index} className="password-errors">{err}</div>) 
                  : <div>{error}</div>
                }
              </div>
            )}
          </div>
          <Link to="/login">
            Already have an account? Log in here
          </Link>
        </form>
      </div>
    </BasePage>
  );
}

export default RegisterPage;
