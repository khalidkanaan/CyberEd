import React from 'react';
import '../assets/css/styling.css'
import DialogueBox from '../../../components/DialogueBox';
import { intro } from '../assets/dialogues';
import robot from '../assets/img/robot-helper.gif';
import kaspersky from '../../threats/assets/img/antivirus/kaspersky.gif';
import shield from '../../threats/assets/img/antivirus/shield.gif';
import virus from '../../threats/assets/img/malware/virus/virus.gif';
import ransomware from '../../threats/assets/img/malware/ransomware/randy.gif';
import trojan from '../../threats/assets/img/malware/trojan/trojan.gif';
import worm from '../../threats/assets/img/malware/worm/worm.gif';

function Slide1() {

  return (
    <div>
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
