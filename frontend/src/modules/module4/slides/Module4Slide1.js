import React from 'react';
import '../assets/css/styling.css'
import DialogueBox from '../components/DialogueBox4';
import { intro } from '../assets/Module4Dialogues'
import robotHelper from '../assets/img/robot-helper.gif'
import Watch2 from '../assets/img/cursor/Watch2.gif'
import Shoot from '../assets/img/cursor/Shoot.gif'
import ScanningGif from '../assets/img/cursor/ScanningGif.gif'
import ScanningGif2 from '../assets/img/cursor/ScanningGif2.gif'
import Wake from '../assets/img/cursor/Wake.gif'
import Stance1 from '../assets/img/cursor/Stance1.gif'
import Stance2 from '../assets/img/cursor/Stance2.gif'
import Stance3 from '../assets/img/cursor/Stance3.gif'
import BackShot from '../assets/img/cursor/BackShot.gif'


function Slide1() {

  return (
    <div>
      <DialogueBox dialogues={intro} />
      <img id='robot' src={robotHelper} className='robot robotimage' alt="friendly website robot" style={{ display: "none" }} />

      <div id='antivirus-img-div' className='image-container antivirus-image-container' style={{ display: "none" }}>

        <img id='Stance2' className='image' src={Stance2} alt="Stance2" style={{ display: "none" }} />
        <img id='Stance3' className='image' src={Stance3} alt="Stance3" style={{ display: "none" }} />
 
 
      </div>

      <div id='malware-img-div' className='image-container malware-image-container' style={{ display: "none" }}>
        <img id='Stance1' className='image' src={Stance1} alt="Stance1" style={{ display: "none" }} />
        <img id='BackShot' className='image' src={BackShot} alt="BackShot" style={{ display: "none" }} />
        <img id='Wake' className='image' src={Wake} alt="Wake" style={{ display: "none" }} />
        <img id='Watch' className='image' src={Watch2} alt="Watch" style={{ display: "none" }} />

      </div>
    </div>
  );
}

export default Slide1;
