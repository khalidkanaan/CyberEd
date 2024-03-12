import React from 'react';
import '../assets/css/styling.css'
import { navigateSlide, toggleElements, createDialogueBox, closeDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import FillTheBlanks from '../../../components/FillTheBlanks';
import { intro2, intro2end } from '../assets/dialogues';
import Slide1 from './Slide1';

import robot from '../assets/img/robot-helper.gif';
import cybersecurity from '../assets/img/terms/cybersecurity.gif';
import stool from '../assets/img/cia/3-stool-CIA.png';
import stoolCMissing from '../assets/img/cia/conf-missing.png';
import stoolIMissing from '../assets/img/cia/int-missing.png';
import stoolAMissing from '../assets/img/cia/aval-missing.png';
import confidentiality from '../assets/img/cia/confidentiality.png';
import userlogin from '../assets/img/cia/logging-in.gif';
import integrity from '../assets/img/cia/integrity.png';
import tf2cheater from '../assets/img/cia/tf2-cheater.gif';
import availability from '../assets/img/cia/availability.png';
import dinoGame from '../assets/img/cia/dino-game.gif';
import netflixDown from '../assets/img/cia/netflix-down.gif';

function Slide2() {
  const questions = [
    {
      text: '1) Confidentiality ensures that information is only accessible to ___________.',
      options: ['authorized individuals', 'everyone', 'hackers'],
      answer: 'authorized individuals'
    },
    {
      text: '2) Integrity verifies that data remains ___________.',
      options: ['inaccessible', 'encrypted', 'accurate and unaltered'],
      answer: 'accurate and unaltered'
    },
    {
      text: '3) Availability ensures that information is ___________ when needed.',
      options: ['deleted', 'accessible', 'encrypted'],
      answer: 'accessible'
    }
  ];

  return (
    <div>
      <button id="go-back" className='slide-back-button' onClick={() => navigateSlide(Slide1)}>Slide Back</button>
      <button id= "restart-intro" className='slide-back-button' onClick={() => navigateSlide(Slide2)} style={{display: "none"}}>Slide Back</button>
      <DialogueBox dialogues={intro2}/>
      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id='cybersecurity' src={cybersecurity} className='middle-position' alt="cybersecurity-shield" style={{display: "none"}}/>

      <img id='cia-stool' src={stool} className='middle-position' alt="CIA-triad" style={{display: "none"}}/>
      <img id='stoolCMissing' src={stoolCMissing} className='position-img-right' alt="stoolCMissing" style={{display: "none"}}/>
      <img id='confidentiality' src={confidentiality} className='middle-position image-half-size' alt="confidentiality" style={{display: "none"}}/>
      <img id='userlogin' src={userlogin} className='middle-position' alt="user-logging-in" style={{display: "none"}}/>

      <img id='stoolIMissing' src={stoolIMissing} className='position-img-right' alt="stoolIMissing" style={{display: "none"}}/>
      <img id='integrity' src={integrity} className='middle-position  image-make-tiny' alt="integrity" style={{display: "none"}}/>
      <img id='tf2cheater' src={tf2cheater} className='middle-position' alt="tf2cheater" style={{display: "none"}}/>
      <img id='cia-stool-right' src={stool} className='position-img-right' alt="CIA-triad-right" style={{display: "none"}}/>

      <img id='stoolAMissing' src={stoolAMissing} className='position-img-right' alt="stoolAMissing" style={{display: "none"}}/>
      <img id='availability' src={availability} className='middle-position image-half-size' alt="availability" style={{display: "none"}}/>
      <img id='dinoGame' src={dinoGame} className='middle-position' alt="dinoGame" style={{display: "none"}}/>
      <img id='netflixDown' src={netflixDown} className='middle-position-bigger' alt="netflixDown" style={{display: "none"}}/>
      <div id='cia-quiz' style={{display: "none"}}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <FillTheBlanks questions={questions} onCheckAnswers={() => {closeDialogueBox(); 
                  toggleElements(['go-back'], false).then(
            () => toggleElements(['restart-intro'])).then(
            () => createDialogueBox(intro2end)
            )}}/>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
