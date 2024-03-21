import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { dialogues3 } from '../assets/dialogues'
import Slide2 from './Slide2';
import coolRobot from '../assets/img/coolRobot.gif'
import twoFA from '../assets/img/2FA.gif'
import lock from '../assets/img/Lock.gif'


function Slide3() {
  return (
    <div className='password'>

      <button className='slide-back-button' onClick={() => navigateSlide(Slide2)}>Slide Back</button>
      <DialogueBox dialogues={dialogues3} />

      <img id='robot' src={coolRobot} className='robot image' alt="friendly website robot" style={{display: "none"}} />

      <div id='lock' className='image-container villain-image-container' style={{display: "none"}}>
        <img className='image' src={lock} alt="Lock" />
      </div>

      <div id='twoFA' className='image-container password-image-container' style={{display: "none"}}>
        <img className='image' src={twoFA} alt="Two Factor Authentication" />
      </div>

    </div>
  );
}

export default Slide3;
