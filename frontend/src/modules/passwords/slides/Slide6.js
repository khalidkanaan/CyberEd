import React, { useState } from 'react';
import '../assets/css/Passwords.styling.css';
import DialogueBox from '../../../components/DialogueBox'; // Import DialogueBox
import { dialogues6 } from '../assets/dialogues'; // Import dialogues5
import coolRobot from '../assets/img/coolRobot.gif';

function Slide6() {
    return (
      <div className='password'>
  
        <DialogueBox dialogues={dialogues6} />
  
        <img id='coolRobot' src={coolRobot} className='robot image' alt="friendly website robot" />

      </div>
    );
  }
  
  export default Slide6;

