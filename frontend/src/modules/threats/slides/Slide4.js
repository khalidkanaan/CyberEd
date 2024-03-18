import React from 'react';
import { navigateSlide, createDialogueBox, closeDialogueBox, toggleElements } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import FillTheBlanks from '../../../components/FillTheBlanks';
import { wormsDialogue2, wormsEnd } from '../assets/dialogues'
import Slide3 from './Slide3';
import robot from '../assets/img/robot-helper.gif';
import firewall from '../assets/img/malware/worm/firewall.gif';
import traffic from '../assets/img/malware/worm/traffic.gif';
import carTraffic from '../assets/img/malware/worm/traffic-cars.gif';
import firewallFilter from '../assets/img/malware/worm/firewall-filter.gif';
import firewallRules from '../assets/img/malware/worm/firewall-rules.gif';
import radar from '../assets/img/malware/worm/radar.gif';

const questions = [
  {
    text: '1) Firewalls create a barrier between an internal network and external networks, acting as a ___________ to control incoming and outgoing traffic.',
    options: ['gateway', 'checkpoint', 'firewall'],
    answer: 'gateway'
  },
  {
    text: '2) One common method used by firewalls to determine whether to allow or block traffic is through the use of predefined sets of rules, also known as ___________.',
    options: ['protocols', 'configurations', 'firewall rules'],
    answer: 'firewall rules'
  },
  {
    text: '3) What analogy can be drawn between intrusion detection systems (IDS) and intrusion prevention systems (IPS) and ___________?',
    options: ['locks', 'radars', 'shields'],
    answer: 'radars'
  }
];

function Slide4() {
  return (
    <div>
      <button id="go-back" className='slide-back-button' onClick={() => navigateSlide(Slide3)}>Slide Back</button>
      <button id= "restart-intro" className='slide-back-button' onClick={() => navigateSlide(Slide4)} style={{display: "none"}}>Slide Back</button>
      <DialogueBox dialogues={wormsDialogue2} />

      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id="firewall" className="middle-position" style={{display: "none"}} src={firewall} alt="firewall" />
      <img id="traffic" style={{display: "none",  transform: "translateY(25%)"}} src={traffic} alt="traffic" />
      <img id="carTraffic" style={{display: "none", width: "40%", transform: "translateY(25%)"}} src={carTraffic} alt="carTraffic" />
      <img id="firewallFilter" style={{display: "none", width: "50%", transform: "translateY(15%)"}} src={firewallFilter} alt="firewallFilter" />
      <img id="firewallRules" className="middle-position" style={{display: "none"}} src={firewallRules} alt="firewallRules" />
      <img id="radar" className="middle-position  move-up-15-percent" style={{display: "none"}} src={radar} alt="radar" />

      <div id='firewall-quiz' style={{display: "none"}}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <FillTheBlanks questions={questions} onCheckAnswers={() => {closeDialogueBox(); 
                  toggleElements(['go-back'], false).then(
            () => toggleElements(['restart-intro'])).then(
            () => createDialogueBox(wormsEnd)
            )}}/>
        </div>
      </div>
    </div>
  );
}

export default Slide4;
