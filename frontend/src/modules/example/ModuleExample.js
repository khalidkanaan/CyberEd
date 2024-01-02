import React, { useState } from 'react';
import Module from '../../../components/Module'
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

function ModuleExample() {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Module backLink="/" nextLink="/module2">
      <button onClick={() => setCurrentSlide(currentSlide - 1)} disabled={currentSlide === 0}>Slide Back</button>
      {slides[currentSlide]}
      <button onClick={() => setCurrentSlide(currentSlide + 1)} disabled={currentSlide === slides.length - 1}>Slide Next</button>
    </Module>
  );
}

export default ModuleExample;
