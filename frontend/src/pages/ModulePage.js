import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../pages/BasePage';
import BackButton from '../assets/img/module-back.gif'
import NextButton from '../assets/img/module-next.gif'
import '../assets/css/modules.css'

function Module({ backLink, nextLink, children }) {
  return (
    <BasePage>
      <div className='new-window'>
        <Link to={backLink}>
          <img src={BackButton} alt="back" className="back-button"/>
        </Link>
        <Link to={nextLink}>
          <img src={NextButton} alt="next" className="next-button"/>
        </Link>
        <div className='module-window'>
          {children}
        </div>
      </div>
    </BasePage>
  );
}

export default Module;
