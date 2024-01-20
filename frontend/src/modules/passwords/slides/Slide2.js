import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { dialogues2 } from '../assets/dialogues'
import coolRobot from '../assets/img/coolRobot.gif'
import pwdmanager1 from '../assets/img/pwdmanager1.gif'
import pwdmanager2 from '../assets/img/pwdmanager2.gif'
import Slide1 from './Slide1';


function Slide2() {
  return (
    <div className='password'>
      <h1>Slide 2</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide1)}>Slide Back</button>
      <DialogueBox dialogues={dialogues2}/>
      
      <img id='robot' src={coolRobot} className='robot image' alt="friendly website robot" style={{display: "none"}} />
      
      <div id='pwdmanager1-img-div' className='image-container pwdmanager1-image-container' style={{display: "none"}}>
        <img id='pwdmanager1' className='image' src={pwdmanager1} alt="Password Manager 1" />
      </div>

      <div id='pwdmanager2-img-div' className='image-container pwdmanager2-image-container' style={{display: "none"}}>
        <img id='pwdmanager2' className='image' src={pwdmanager2} alt="Password Manager 2" />
      </div>
    </div>
  );
}

export default Slide2;
