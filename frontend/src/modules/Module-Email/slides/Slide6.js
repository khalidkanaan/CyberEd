import React from 'react';
import '../assets/css/styling.css'
import outside from '../assets/img/outside-intro.jpg'
import DialogueBox from '../../../components/DialogueBox';
import { LaFin } from '../assets/js/dailogues'
import mailmanS from '../assets/img/Mailman-smile.png'
import face from '../assets/img/Mailman-face.png'


function Slide6() {
    return (
      <div>
        <DialogueBox dialogues={LaFin}/>
        <div className='Email'>
          <img id='outside' src={outside} className='bg1' alt="Warehouse outside" style={{display: "none"}} />
  
          <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />
  
          <img id='mailmanSmile' src={mailmanS} className='mailman image' alt="friendly mailman" style={{display: "none", width:"150px"}} />
        </div>
      </div>
    );
  }
  
  export default Slide6;