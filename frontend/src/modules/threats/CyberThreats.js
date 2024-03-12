import React from 'react';
import Module from '../../pages/ModulePage'
import Slide2 from './slides/Slide2';


function CyberThreats() {
  return (
    <Module backLink="/" nextLink="/">
      <div id="slide">
        <Slide2 />
      </div>
    </Module>
  );
}

export default CyberThreats;
