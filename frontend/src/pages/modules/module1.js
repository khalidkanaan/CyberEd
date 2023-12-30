import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import BackButton from '../../assets/img/module-back.gif'
import NextButton from '../../assets/img/module-next.gif'
import '../../assets/css/modules.css'

function Module1() {
  return (
    <BasePage>
      <div className='new-window'>
        <Link to="/">
          <img src={BackButton} alt="back" className="back-button"/>
        </Link>
        <Link to="/module2">
          <img src={NextButton} alt="next" className="next-button"/>
        </Link>
        <div className='module-window'>
        </div>
      </div>
    </BasePage>
  );
}
  
export default Module1;
