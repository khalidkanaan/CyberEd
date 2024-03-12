import React from 'react';
import Module from '../../pages/ModulePage'
import Slide1 from './slides/Slide1';


function CyberIntro() {
  return (
    <Module backLink="/" nextLink="/">
      <div id="slide">
        <Slide1 />
      </div>
    </Module>
  );
}

export default CyberIntro;
