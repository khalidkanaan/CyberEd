import React, { useState, useEffect } from 'react';
import { navigateSlide, closeDialogueBox, createDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { mitmDialogue, mitmDialogue2 } from '../assets/dialogues'
import { PhoneProvider, Phone} from '../../../components/Phone';
import Slide5 from './Slide5';
import robot from '../assets/img/robot-helper.gif';

import mitm1 from '../assets/img/malware/active-attack/mitm1.png'
import malwares from '../assets/img/malware/active-attack/malwares.gif'
import sus from '../assets/img/malware/active-attack/sus.gif'
import mitm3 from '../assets/img/malware/active-attack/mitm3.gif'
import decryption from '../assets/img/malware/active-attack/decryption.gif'
import encryption from '../assets/img/malware/active-attack/encryption.gif'
import emailEncrypted from '../assets/img/malware/active-attack/email-encrypted.gif'
import hackerFriend from '../assets/img/malware/active-attack/hacker-friend.gif'
import mitm2 from '../assets/img/malware/active-attack/mitm2.png'

function Slide6() {
  const convo = [
    { id: 'keyboard1', message: 'Hello' },
    { id: 'keyboard2', message: 'Hi' },
    { id: 'keyboard1', message: 'How are you?' },
    { id: 'keyboard2', message: 'I\'m good, thank you.' },
    { id: 'keyboard1', message: 'What have you been up to?' },
    { id: 'keyboard2', message: 'Not much, just relaxing.' },
    { id: 'keyboard1', message: 'That sounds nice. I\'ve been working on the capstone project. 😪' },
    { id: 'keyboard2', message: 'Nice, can I see your progress?' },
    { id: 'keyboard1', message: 'Sure, I\'m curently working on creating a phone game' },
    { id: 'keyboard2', message: 'I\'ll be using it to teach people about man in the middle attacks' },
    { id: 'keyboard2', message: 'Looks great so far.' },
    { id: 'keyboard1', message: 'Thank you 😁' },
    { id: 'keyboard2', message: 'Let me know if you need any help with your stuff.' },
    { id: 'keyboard1', message: 'Thanks, I might take you up on that offer.' },
    { id: 'keyboard2', message: 'Alright, take care' },
    { id: 'keyboard1', message: 'Cya 👋' },
    { id: 'keyboard2', message: 'psst' }
  ]

  const [originalTexts, setOriginalTexts] = useState([]);
  const [scrambledTexts, setScrambledTexts] = useState([]);
  const [isScrambled, setIsScrambled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const caesarCipher = (text) => {
    const shift = 17;
  
    return text
      .split('')
      .map(char => {
        const code = char.charCodeAt(0);
        // check if character is within the range of printable ASCII characters
        if (code >= 32 && code <= 126) {
          return String.fromCharCode(
            ((code - 32 + shift) % 94) + 32
          );
        }
        
        return char;
      })
      .join('');
  };
  

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const parentDiv = document.getElementById('phone2').firstElementChild.firstElementChild;
          const divs = parentDiv.querySelectorAll('div');
          const last10Divs = Array.from(divs).slice(-5);
          const last10Texts = last10Divs.map(div => div.textContent);
          setOriginalTexts(last10Texts);
          if (isScrambled) {
            setScrambledTexts(last10Texts.map(text => caesarCipher(text)));
          }
        }
      });
    });

    const config = { attributes: true, childList: true, subtree: true };
    const targetNode = document.getElementById('phone2');
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [isScrambled]);

  const handleScramble = () => {
    setClickCount(prevClickCount => prevClickCount + 1);
    if (clickCount === 1) {
      closeDialogueBox();
      setTimeout(() => {createDialogueBox(mitmDialogue2)}, 650);
    }
    if (!isScrambled) {
      const newScrambledTexts = originalTexts.map(text => caesarCipher(text));
      setScrambledTexts(newScrambledTexts);
    }
    setIsScrambled(!isScrambled);
  };

  return (
    <div>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide5)}>Slide Back</button>
      <DialogueBox dialogues={mitmDialogue} />
      <div id="Phones" style={{display: "none"}}>
        <PhoneProvider conversation={convo}>
            <div id='phone1' className='move-to-bottom-left'>
              <Phone id="keyboard1"/>
            </div>
            <div id='phone2' className='move-to-bottom-right'>
              <Phone id="keyboard2"/>
            </div>
        </PhoneProvider>
      </div>

      <div id="mitmText" className="mitm-div" style={{display: "none"}}>
        {(isScrambled ? scrambledTexts : originalTexts).map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <label id="encryptDecrypt" className="mitm-button" style={{display: "none"}}>
        <input type="checkbox" onClick={handleScramble} />
        <span className="slider round"></span>
        <p className="mitm-button-text">{isScrambled ? 'Decrypt' : 'Encrypt'}</p>
      </label>

      <img id="robot" className="speaking-character" src={robot} alt="robot" />
      <img id='bigRobot' src={robot} className='robot image' alt="friendly website robot" style={{display: "none"}} />

      <img id="sus" className="middle-position" style={{display: "none", width: "40%", transform:"translate(-20%, -5%)"}} src={sus} alt="sus" />
      <img id="sus1second" className="middle-position" style={{display: "none", width: "30%", transform:"translate(35%, -10%)"}} src={sus} alt="sus1second" />
      <img id="malwares" className="middle-position"style={{display: "none", width: "30%", transform:"translate(-50%, -15%)"}} src={malwares} alt="malwares" />
      <img id="mitm1" className="middle-position" style={{display: "none", width: "40%", transform:"translate(-20%, -10%)"}} src={mitm1} alt="mitm1" />
      <img id="mitm3" className="middle-position" style={{display: "none", width: "50%", transform:"translate(-25%, 5%)"}} src={mitm3} alt="mitm3" />

      <img id="emailEncrypted" className="middle-position" style={{display: "none", width: "50%", transform:"translate(-25%, -20%)"}} src={emailEncrypted} alt="emailEncrypted" />
      <img id="decryption" className="middle-position" style={{display: "none", width: "20%", transform:"translate(140%, -40%)"}} src={decryption} alt="decryption" />
      <img id="encryption" className="middle-position" style={{display: "none", width: "20%", transform:"translate(-120%, -40%)"}} src={encryption} alt="encryption" />
      <img id="hackerFriend" className="middle-position move-up-15-percent" style={{display: "none"}} src={hackerFriend} alt="hackerFriend" />


      <img id="mitm2" className="middle-position" style={{display: "none", width: "37%", transform:"translate(-20%, -5%)"}} src={mitm2} alt="mitm2" />
    </div>
  );
}

export default Slide6;
