import React, {} from 'react';
import { navigateSlide} from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { dialogues4 } from '../assets/dialogues'
import Slide3 from './Slide3';
import robot from '../assets/img/robotChill.gif';
import haunter from '../assets/img/hungryHaunter.gif';
import chibiHaunter from '../assets/img/chibi Haunter.gif';
import sadHaunter from '../assets/img/sadHaunter.png';
import superSadHaunter from '../assets/img/superSadHaunter.png';

function Slide4() {
  const passwords = ['password123','PasSwoRd123','P@$SwoRd123!', 'NewP@sSwoRd123!',];
  const strengths = [20, 30, 60, 90 ];
  const colors = ['#ff0000', '#ffff00', '#AAFF00', '#013220'];

  return (
    <div className='password'>
  
      <button className='slide-back-button' onClick={() => navigateSlide(Slide3)}>Slide Back</button>
      <DialogueBox dialogues={dialogues4}/>

      <img id='robot' src={robot} className='face' alt="chill robot" style={{display: "none"}} />

      <div>
        <img id='haunter' src={haunter} className='image-container' alt="Evil Haunter" style={{display: "none"}} />
      </div>

      <div>
        <img id='chibiHaunter' src={chibiHaunter} className='image-container' alt="Chibi Evil Haunter" style={{display: "none"}} />
      </div>

      <div>
        <img id='sadHaunter' src={sadHaunter} className='image-container' alt="sad Evil Haunter" style={{display: "none"}} />
      </div>

      <div>
        <img id='superSadHaunter' src={superSadHaunter} className='image-container' alt="super sad Evil Haunter" style={{display: "none"}} />
      </div>

      <div className='password-container' id='weakPass' style={{display: "none"}}>
        <label>Password:</label>
          <input type="text" value={passwords[0]} readOnly style={{textAlign: "center"}} /> {/* Added style */}
        <label>Strength:</label>
      <div className='strength-bar' style={{width: `${strengths[0]}%`, backgroundColor: colors[0]}}></div>
      </div> 

      <div className='password-container' id='midPass' style={{display: "none"}}>
          <label>Password:</label>
          <input type="text" value={passwords[1]} readOnly style={{textAlign: "center"}} />
          <label>Strength:</label>
          <div className='strength-bar' style={{width: `${strengths[1]}%`, backgroundColor: colors[1]}}></div>
      </div> 

      <div className='password-container' id='strongPass' style={{display: "none"}}>
          <label>Password:</label>
          <input type="text" value={passwords[2]} readOnly style={{textAlign: "center"}} />
          <label>Strength:</label>
          <div className='strength-bar' style={{width: `${strengths[2]}%`, backgroundColor: colors[2]}}></div>
      </div> 

      <div className='password-container' id='strongerPass' style={{display: "none"}}>
          <label>Password:</label>
          <input type="text" value={passwords[3]} readOnly style={{textAlign: "center"}} />
          <label>Strength:</label>
          <div className='strength-bar' style={{width: `${strengths[3]}%`, backgroundColor: colors[3]}}></div>
      </div>
 
    </div>
  );
}

export default Slide4;
