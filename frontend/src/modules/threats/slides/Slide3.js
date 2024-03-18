import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { wormsDialogue } from '../assets/dialogues'
import Slide2 from './Slide2';
import robot from '../assets/img/robot-helper.gif';
import worm from '../assets/img/malware/worm/worm.gif'
import wormSpeaker from '../assets/img/malware/worm/worm-speaker.png'

import wormSpreading from '../assets/img/malware/worm/worm-spreading.gif';
import plague from '../assets/img/malware/worm/plague.gif';
import tenticle1 from '../assets/img/malware/worm/tenticle1.gif';
import tenticle2 from '../assets/img/malware/worm/tenticle2.gif';
import tenticle3 from '../assets/img/malware/worm/tenticle3.gif';

import burnPc from '../assets/img/malware/worm/burn-pc.gif';
import ddos from '../assets/img/malware/worm/ddos.gif';
import noKaspersky from '../assets/img/malware/worm/kaspersky-x.gif';
import firewall from '../assets/img/malware/worm/firewall.gif';

import traffic from '../assets/img/malware/worm/traffic.gif';
import carTraffic from '../assets/img/malware/worm/traffic-cars.gif';
import firewallFilter from '../assets/img/malware/worm/firewall-filter.gif';
import firewallRules from '../assets/img/malware/worm/firewall-rules.gif';
import radar from '../assets/img/malware/worm/radar.gif';

function Slide3() {
  return (
    <div>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide2)}>Slide Back</button>
      <DialogueBox dialogues={wormsDialogue} />

      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id="worm" className="middle-position move-up-15-percent"  style={{display: "none"}} src={worm} alt="worm" />
      <img id="worm-play" className="position-img-right" style={{display: "none"}} src={worm} alt="worm" />
      <img id="wormSpeaker" className="speaking-character"  style={{display: "none"}} src={wormSpeaker} alt="wormSpeaker" />

      <img id="wormSpreading" className="middle-position" style={{display: "none", transform: "translateY(-40%)"}} src={wormSpreading} alt="wormSpreading" />
      <img id="plague" className="middle-position" style={{display: "none", transform: "translateY(-40%)"}} src={plague} alt="plague" />
      <img id="tenticle1" style={{display: "none", transform: "translate(-180%, 200%)"}} src={tenticle1} alt="tenticle1" />
      <img id="tenticle2" style={{display: "none", transform: "translate(-90%, 20%)"}} src={tenticle2} alt="tenticle2" />
      <img id="tenticle3" style={{display: "none", transform: "translate(20%,20%)"}} src={tenticle3} alt="tenticle3" />

      <img id="burnPc" className="middle-position move-up-15-percent" style={{display: "none"}} src={burnPc} alt="burnPc" />
      <img id="ddos" style={{display: "none", width: "40%", transform: "translate(-10%, 10%)"}} src={ddos} alt="ddos" />

      <img id="noKaspersky" className="middle-position  move-right-and-up" style={{display: "none"}} src={noKaspersky} alt="noKaspersky" />
      <img id="firewall" className="middle-position  move-left-and-up" style={{display: "none"}} src={firewall} alt="firewall" />
      <img id="traffic" style={{display: "none",  transform: "translateY(25%)"}} src={traffic} alt="traffic" />
      <img id="carTraffic" style={{display: "none", width: "40%", transform: "translateY(25%)"}} src={carTraffic} alt="carTraffic" />
      <img id="firewallFilter" style={{display: "none", width: "50%", transform: "translateY(15%)"}} src={firewallFilter} alt="firewallFilter" />
      <img id="firewallRules" className="middle-position" style={{display: "none"}} src={firewallRules} alt="firewallRules" />
      <img id="radar" className="middle-position  move-up-15-percent" style={{display: "none"}} src={radar} alt="radar" />
    </div>
  );
}

export default Slide3;
