import React from 'react';
import '../assets/css/styling.css'
import { navigateSlide, toggleElements, createDialogueBox, closeDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import FillTheBlanks from '../../../components/FillTheBlanks';
import { intro3, intro3end } from '../assets/dialogues';
import Slide2 from './Slide2';

import robot from '../assets/img/robot-helper.gif';
import creeperVsArmour from '../assets/img/terms/creeper-armour.gif';
import vrta from '../assets/img/terms/vrta.png';
import hacker from '../assets/img/terms/hacker.gif';
import laptopSick from '../assets/img/terms/sick-laptop.gif';
import riskAssess from '../assets/img/terms/risk-assess.gif';

function Slide3() {
  const questions = [
    {
        text: 'A ___________ is a potential danger that may exploit a vulnerability to breach security and cause harm.',
        options: ['vulnerability', 'threat', 'attack', 'risk'],
        answer: 'threat'
    },
    {
      text: 'A ___________ is a weakness or gap in a system that can be exploited by threats to gain unauthorized access to or perform unauthorized actions within the system.',
      options: ['vulnerability', 'threat', 'attack', 'risk'],
      answer: 'vulnerability'
    },
    {
      text: '___________ refers to the potential loss or harm that can result from a threat exploiting a vulnerability.',
      options: ['Vulnerability', 'Threat', 'Attack', 'Risk'],
      answer: 'Risk'
    },
    {
        text: 'An ___________ is an actual action taken to exploit a vulnerability and breach security.',
        options: ['vulnerability', 'threat', 'attack', 'risk'],
        answer: 'attack'
    },
  ];

  return (
    <div>
      <button id="go-back" className='slide-back-button' onClick={() => navigateSlide(Slide2)}>Slide Back</button>
      <button id= "restart-intro" className='slide-back-button' onClick={() => navigateSlide(Slide3)} style={{display: "none"}}>Slide Back</button>
      <DialogueBox dialogues={intro3}/>
      <img id="robot" className="speaking-character" src={robot} alt="robot" />

      <img id='vrta' src={vrta} className='middle-position-bigger' alt="vrta" style={{display: "none"}}/>
      <img id='creeperVsArmour' src={creeperVsArmour} className='middle-position-bigger' alt="creeperVsArmour" style={{display: "none"}}/>
      <img id='hacker' src={hacker} className='middle-position move-left-and-up' alt="hacker" style={{display: "none"}}/>
      <img id='laptopSick' src={laptopSick} className='middle-position move-right-and-up' alt="laptopSick" style={{display: "none"}}/>
      <img id='riskAssess' src={riskAssess} className='middle-position' alt="riskAssess" style={{display: "none"}}/>

      <div id='vrta-quiz' style={{display: "none"}}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <FillTheBlanks questions={questions} onCheckAnswers={() => {closeDialogueBox(); 
                  toggleElements(['go-back'], false).then(
            () => toggleElements(['restart-intro'])).then(
            () => createDialogueBox(intro3end)
            )}}/>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
