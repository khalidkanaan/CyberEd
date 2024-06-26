import React from 'react';
import '../assets/css/Passwords.styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { intro } from '../assets/dialogues'
import coolRobot from '../assets/img/coolRobot.gif'
import villain from '../assets/img/villain.gif'
import password from '../assets/img/password.gif'


function Slide1() {
  return (
    <div className= 'password'>

      <DialogueBox dialogues={intro}/>
      <img id='robot' src={coolRobot} className='robot image' alt="friendly website robot" style={{display: "none"}} />
      
      <div id='villain-img-div' className='image-container villain-image-container' style={{display: "none"}}>
        <img id='villain' className='image' src={villain} alt="villain" />
      </div>

      <div id='password-img-div' className='image-container password-image-container' style={{display: "none"}}>
        <img id='password' className='image' src={password} alt="password" />
      </div>
    </div>
  );
}

export default Slide1;
