import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { trojanDialogue } from '../assets/dialogues'
import Slide4 from './Slide4';
import robot from '../assets/img/robot-helper.gif';
import trojanSpeaker from '../assets/img/malware/trojan/trojan-speaker.png'
import trojanGif from '../assets/img/malware/trojan/trojan.gif'
import trojanImg from '../assets/img/malware/trojan/trojan.png'
import wolfInSheep from '../assets/img/malware/trojan/wolf-in-sheep.gif'
import wolfMad from '../assets/img/malware/trojan/wolf-mad.gif'
import trojanEnemy from '../assets/img/malware/trojan/trojan-enemy.gif'
import trojanSoldiers from '../assets/img/malware/trojan/trojan-soldiers.gif'
import popups from '../assets/img/malware/virus/popups.gif';
import lightLaughing from '../assets/img/malware/trojan/light-laughing.gif';

function Slide5() {

  return (
    <div>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide4)}>Slide Back</button>
      <DialogueBox dialogues={trojanDialogue} />
      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id='bigRobot' src={robot} className='robot image' alt="friendly website robot" style={{display: "none"}} />
      <img id="trojanSpeaker" className="speaking-character" src={trojanSpeaker} alt="trojanSpeaker" />
      <img id="trojanGif" className="middle-position" style={{display: "none"}} src={trojanGif} alt="trojanGif" />
      <img id="trojanImg" className="middle-position move-up-15-percent" style={{display: "none"}} src={trojanImg} alt="trojanImg" />
      <img id="popups" className="middle-position move-up-15-percent" style={{display: "none"}} src={popups} alt="popups" />
      <img id="wolfInSheep" className="middle-position move-up-15-percent" style={{display: "none"}} src={wolfInSheep} alt="wolfInSheep" />
      <img id="wolfMad" className="middle-position move-up-15-percent" style={{display: "none"}} src={wolfMad} alt="wolfMad" />
      <img id="trojanEnemy" className="middle-position move-up-15-percent" style={{display: "none"}} src={trojanEnemy} alt="trojanEnemy" />
      <img id="trojanSoldiers" className="middle-position move-up-15-percent" style={{display: "none"}} src={trojanSoldiers} alt="trojanSoldiers" />
      <img id="lightLaughing" className="middle-position move-up-15-percent" style={{display: "none", transform: "translateY(-25%)"}} src={lightLaughing} alt="lightLaughing" />
    </div>
  );
}

export default Slide5;
