import React from 'react';
import Module from '../../pages/ModulePage'
import Slide1 from './slides/Slide1';


function CyberThreats() {
  return (
    <Module backLink="/" nextLink="/module/passwords">
      <div id="slide">
        <Slide1 />
      </div>
    </Module>
  );
}

export default CyberThreats;
