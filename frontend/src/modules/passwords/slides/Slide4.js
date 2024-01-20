import React, { useState, useEffect } from 'react';
import { navigateSlide, toggleElements } from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { dialogues4 } from '../assets/dialogues'
import Slide3 from './Slide3';
import robot from '../assets/img/robotChill.gif';
import haunter from '../assets/img/hungryHaunter.gif';

function Slide4() {
  const passwords = ['password123','PasSwoRd123','P@$SwoRd123!', 'NewP@sSwoRd123!',];
  const strengths = [20, 30, 60, 90 ];
  const colors = ['#ff0000', '#ffff00', '#AAFF00', '#013220'];

  const [index, setIndex] = useState(0); 
  const [isButtonClickable, setIsButtonClickable] = useState(true); 

  const updatePassword = () => {
    if (index >= passwords.length - 1){
      return;
    }else{
      setIndex(index + 1);
      setIsButtonClickable(false);
      toggleElements(['updateButton'], false, true).then(() => setIsButtonClickable(true));
    }
  }

  return (
    <div className='password'>
      <h1>Slide 4</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide3)}>Slide Back</button>
      <DialogueBox dialogues={dialogues4}/>

      <img id='robot' src={robot} className='face' alt="chill robot" style={{display: "none"}} />

      <div>
        <img id='haunter' src={haunter} className='image-container' alt="Evil Haunter" style={{display: "none"}} />
      </div>

       <div className='password-container'>
        <label>Password:</label>
        <input type="text" value={passwords[index]} readOnly />
        <label>Strength:</label>
        <div className='strength-bar' style={{width: `${strengths[index]}%`, backgroundColor: colors[index]}}></div>
      </div> 

      <button id='updateButton' className='update-button' onClick={updatePassword} disabled={!isButtonClickable} style={{display: "none"}}>Update Password</button>
      
    </div>
  );
}

export default Slide4;
