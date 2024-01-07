import React from 'react';
import '../assets/css/styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { intro } from '../assets/dialogues'
import robot from '../assets/img/robot-helper.gif'
import kaspersky from '../assets/img/antivirus/kaspersky.gif'
import shield from '../assets/img/antivirus/shield.gif'
import virus from '../assets/img/malware/virus.png'
import ransomware from '../assets/img/malware/ransomware.png'
import trojan from '../assets/img/malware/trojan.png'
import worm from '../assets/img/malware/worm.png'

function Slide1() {

  return (
    <div>
      <h1>Slide 1</h1>
      <DialogueBox dialogues={intro}/>
      <img id='robot' src={robot} className='robot image' alt="friendly website robot" style={{display: "none"}} />
      
      <div id='antivirus-img-div' className='image-container antivirus-image-container'  style={{display: "none"}}>
        <img id='kaspersky' className='image' src={kaspersky} alt="kaspersky" style={{display: "none"}} />
        <img id='shield' className='image'  src={shield} alt="shield" style={{display: "none"}} />
      </div>
  
      <div id='malware-img-div' className='image-container malware-image-container'  style={{display: "none"}}>
        <img id='virus' className='image' src={virus} alt="virus" style={{display: "none"}} />
        <img id='ransomware' className='image'  src={ransomware} alt="ransomware" style={{display: "none"}} />
        <img id='trojan' className='image' src={trojan} alt="trojan" style={{display: "none"}} />
        <img id='worm' className='image'  src={worm} alt="worm" style={{display: "none"}} />
      </div>
    </div>
  );
}

export default Slide1;
