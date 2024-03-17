import React, { useState } from 'react';
import { navigateSlide, toggleElements, createDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { virusDialogue, ripVirus } from '../assets/dialogues'
import LastIntroSlide from '../../Intro/slides/Slide3';
import robot from '../assets/img/robot-helper.gif';
import virus from '../assets/img/malware/virus/virus.gif'
import virusSpeaker from '../assets/img/malware/virus/virus-speaker.png'
import windowsProtection from '../assets/img/malware/virus/windows-protection.gif';
import spyware from '../assets/img/malware/virus/spyware.gif';
import arrowRight from '../assets/img/malware/virus/arrow-right.gif'
import code from '../assets/img/malware/virus/code.gif'
import file from '../assets/img/malware/ransomware/file.png';
import pcDamaged from '../assets/img/malware/virus/pc-damaged.gif';
import doubleArrow from '../assets/img/malware/virus/double-arrow.gif';
import popups from '../assets/img/malware/virus/popups.gif';
import kaspersky from '../assets/img/antivirus/kaspersky.gif';
import antivirusFactory from '../assets/img/malware/virus/antivirus-factory.gif';
import arrowDown from '../assets/img/malware/virus/arrow-down.gif';
import nuclearButton from '../assets/img/malware/reset-computer.gif';
import antivirusButton from '../assets/img/malware/run-antivirus.gif';
import exorciseSword from '../assets/img/malware/sword.gif';
import exorciseFire from '../assets/img/malware/fires.gif';
import grave from '../assets/img/malware/grave.png';

function Slide1() {
  const [swordClass, setSwordClass] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false); // New state variable
  const [isAnimating, setIsAnimating] = useState(false);
  
  const closeDialogueBox = () => {
    const dialogueBox = document.querySelector('.dialogue-box');
    if (dialogueBox) {
      dialogueBox.classList.add('closing');
      setTimeout(() => {
        dialogueBox.remove();
      }, 500);
    }
  };
  
  const lunchSword = () => {
      if (!isAnimating && !hasAnimated) { // Check if the function has been called before
          setIsAnimating(true);
          setHasAnimated(true); // Set the state variable to true after the function is called
          let imageElement = document.getElementById("burning-sword");
          imageElement.style.display = ""; // Show the image
          setSwordClass("move-diagonal"); // Start the animation
          setIsAnimating(false);
          setTimeout(() => {
              toggleElements(['virus', 'burning-sword', 'nuclear-option', 'antivirus-option'], false, true).then(() =>
              closeDialogueBox()).then(() =>
              toggleElements(['grave'])).then(() =>
              createDialogueBox(ripVirus));
          }, 800); // Do this after 0.8 seconds
      }
  };
  
  const createExplosions = () => {
    let imageElement = document.getElementById("explosions");
    if (imageElement) {
      imageElement.style.display = ""; // Show the image
      toggleElements(['virus', 'nuclear-option', 'antivirus-option'], false, true);
      setTimeout(() => {
        toggleElements(['explosions'], false, true).then(() =>
        closeDialogueBox()).then(() =>
        toggleElements(['grave'])).then(() =>
        createDialogueBox(ripVirus));
      }, 3000); // Do this after 0.8 seconds
    }
  };

  return (
    <div>
      <button className='slide-back-button' onClick={() => navigateSlide(LastIntroSlide)}>Slide Back</button>
      <DialogueBox dialogues={virusDialogue} />

      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id="virus" className="middle-position move-up-15-percent"  style={{display: "none"}} src={virus} alt="virus" />
      <img id="virus-play" className="position-img-right" style={{display: "none"}} src={virus} alt="virus" />
      <img id="virus-speaker" className="speaking-character"  style={{display: "none"}} src={virusSpeaker} alt="virus" />

      <img id="code" className="middle-position move-left-and-up move-up-15-percent" style={{display: "none", maxWidth: "15%"}} src={code} alt="code" />
      <img id="file" className="middle-position move-right-and-up move-up-15-percent" style={{display: "none", maxWidth: "15%"}} src={file} alt="file" />
      <img id="arrowRight" className="middle-position move-up-15-percent" style={{display: "none", maxWidth: "17%"}} src={arrowRight} alt="arrowRight" />

      <img id="windowsProtection" className="middle-position move-up-15-percent" style={{display: "none"}} src={windowsProtection} alt="windowsProtection" />
      <img id="pcDamaged" className="middle-position move-up-15-percent" style={{display: "none", maxWidth: "22%"}} src={pcDamaged} alt="pcDamaged" />
      
      <img id="spyware" className="middle-position" style={{display: "none", transform: "translate(60%, -35%)"}} src={spyware} alt="spyware" />
      <img id="popups" className="middle-position" style={{display: "none", transform: "translate(-60%, -45%)"}} src={popups} alt="popups" />
      <img id="doubleArrow" className="middle-position" style={{display: "none", maxWidth: "15%", transform: "translate(30%, -40%)"}} src={doubleArrow} alt="doubleArrow" />

      <img id="kaspersky" className="middle-position move-right-and-up"  style={{display: "none"}} src={kaspersky} alt="kaspersky" />
      <img id="antivirusFactory" className="middle-position move-left-and-up"  style={{display: "none"}} src={antivirusFactory} alt="antivirusFactory" />
      <img id="antivirusFactory" className="middle-position move-left-and-up"  style={{display: "none"}} src={antivirusFactory} alt="antivirusFactory" />
      <img id="arrowDown" className="middle-position"  style={{display: "none", maxWidth: "10%", transform: "translate(65%, -110%)"}} src={arrowDown} alt="arrowDown" />

      <img id="nuclear-option" className="final-option-button nuclear-button" style={{display: "none"}} src={nuclearButton} alt="nuclear option button" onClick={createExplosions}/>
      <img id="antivirus-option" className="final-option-button antivirus-button" style={{display: "none"}} src={antivirusButton} alt="anti-virus button" onClick={lunchSword}/>
      <img id="burning-sword" className={`exorcise-sword ${swordClass}`} style={{display: "none"}} src={exorciseSword} alt="burning sword" />
      <img id="explosions" className="exorcise-fire" src={exorciseFire} style={{display: "none"}} alt="fire explosions" />

      <img id="grave" className="middle-position" src={grave} style={{display: "none"}} alt="virus grave" />
    </div>
  );
}

export default Slide1;
