import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { Settings2 } from '../assets/js/dailogues'
import Slide3 from './Slide3-1';
import inside from '../assets/img/inside-intro.jpg'
import face from '../assets/img/Mailman-face.png'
import secQs from '../assets/img/security-questions.gif'
import badQs from '../assets/img/badSecurity.gif'
import secret from '../assets/img/secret.png'
import recvEx from '../assets/img/recvEx.jpg'
import addrcv from '../assets/img/addrcv.jpg'
import handme from '../assets/img/hand-me.gif'

function Slide35() {

    return (
      <div>
        <h1>Email Security Settings</h1>
        <button className='slide-back-button' onClick={() => navigateSlide(Slide3)}>Slide Back</button>
        <DialogueBox dialogues={Settings2} />
        <div className='Email'>
          <img id='inside2' src={inside} className='bg2 lessop' alt="Warehouse inside" style={{display: "none"}} />
          <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />

          <img id='handme' src={handme} className='mailman Front image' alt='mailman hands package' style={{display: "none", width:'120px', top:'50%'}}/>    

          <img id='RcEx' src={recvEx} className='displays2 image' alt='Recovery Email Location' style={{display: "none"}}/>
          <img id='Adrc' src={addrcv} className='displays2 image' alt='Add Recovery Email' style={{display: "none", left: "53%"}}/>
          
          <div id='secQ-img-div' className='image-container example-image-container' style={{display: "none"}} >
            <img id='secQs' src={secQs} alt="Username Examples"/>
          </div>
          <div id='Qs-img-div' className='image-container example-image-container' style={{display: "none"}} >
            <img id='badQs' src={badQs} alt="Bad Security Question"  />
          </div>
          <div id='Sxs-img-div' className='image-container example-image-container' style={{display: "none"}}>
            <img id='secret' src={secret} alt='Keep secret' style={{width:'50%'}}/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Slide35;