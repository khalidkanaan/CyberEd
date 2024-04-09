import React , {useEffect} from 'react';
import ModulePage4 from '../../pages/ModulePage'
import Slide1 from './slides/Module4Slide1';
import  './assets/css/styling.css'

function DeviceProtection() {
  return (
    <ModulePage4 backLink="/" nextLink="/" >
      <div id="slide" >
        <Slide1 />
      </div >
    </ModulePage4>
  );
}

export default DeviceProtection;
