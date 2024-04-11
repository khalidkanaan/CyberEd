import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css';
import clickGif from'../assets/img/click-login.gif'
import { isCookiePresent } from '../assets/js/helpers.js';

const modules = [
  { id: 'c0', title: 'Intro To Cybersecurity', description: 'Learn about the basics of Cybersecurity. Differentiate between the C.I.A Triad and other important Cybersecurity terminologies', bgImage: require('../assets/img/intro.gif'), defaultChecked: true, link: '/module/cybersecurity-intro' },
  { id: 'c1', title: 'The Digital Underworld', description: 'Learn about the various types of threats and attacks and how to deal with them. This module includes information on Viruses, Ransomware, Worms, and Trojans, along with DDoS and Man-in-the-Middle attacks.', bgImage: require('../assets/img/threats.gif'), link: '/module/cyberthreats' },
  { id: 'c2', title: 'Passwords & Authentication', description: 'Learn about strong password usage, password managers and two-factor authentication.', bgImage: require('../assets/img/module2.png'), link: '/module/passwords' },
  { id: 'c3', title: 'Email Security', description: 'Learn about the essential strategies to safeguard your email usage and communication. ', bgImage: require('../assets/img/logo.png'), link: '/module/emaildefence' },
  { id: 'c4', title: 'Protecting Personal Devices', description: 'Play as  AVIE: Anti-Virus Interface Enforcer! Scan Files,Remove Viruses,Activate Firewalls', bgImage: require('../assets/img/module4.png'), link: '/module/module4' },
];

function ModuleSelection() {
  const isLoggedIn = isCookiePresent('TEST-AUTH');
  const [showGif, setShowGif] = useState(false);
  const timerRef = useRef(null); // Create a reference to store the timer id

  const handleClick = (e, link) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowGif(true);
      clearTimeout(timerRef.current); // Clear the existing timer
      timerRef.current = setTimeout(() => setShowGif(false), 3000); // Store the new timer id
    }
  };

  return (
    <div>
      {showGif && <img src={clickGif} className="click-gif" alt="Click here" />}
      <h1 className="app-title">Welcome to CyberCity</h1>
      <div className="container">
        {modules.map((module, index) => (
          <React.Fragment key={module.id}>
            <input className="module-input" type="radio" name="slide" id={module.id} defaultChecked={module.defaultChecked}/>
            <label htmlFor={module.id} className="card" style={{ backgroundImage: `url(${module.bgImage})` }}>
              <div className="row">
                <div className="icon">{index + 1}</div>
                <div className="description">
                  <div className="module-title">
                    <h4>{module.title}</h4>
                    <Link to={module.link} onClick={(e) => handleClick(e, module.link)}>
                      <button>Start</button>
                    </Link>
                  </div>
                  <p>{module.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ModuleSelection;
