// Module code:
import React, { useState } from 'react';
import BasePage from '../pages/BasePage';
import BackButton from '../assets/img/module-back.gif'
import NextButton from '../assets/img/module-next.gif'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import '../assets/css/modules.css'

function Module() {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <BasePage>
      <div className='new-window'>
        <div className='module-window'>
          <button onClick={() => setCurrentSlide(currentSlide - 1)} disabled={currentSlide === 0}>
            <img src={BackButton} alt="back" className="back-button"/>
          </button>
          {slides[currentSlide]}
          <button onClick={() => setCurrentSlide(currentSlide + 1)} disabled={currentSlide === slides.length - 1}>
            <img src={NextButton} alt="next" className="next-button"/>
          </button>
        </div>
      </div>
    </BasePage>
  );
}

export default Module;
