import React from 'react';
import { navigateSlide} from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { Phishing } from '../assets/js/dailogues'
import Slide3 from './Slide3-2';
import dispense from '../assets/img/dispense.jpg'
import face from '../assets/img/Mailman-face.png'
import mailmanSmile from '../assets/img/Mailman-smile.png'
import inspects from '../assets/img/inspection.jpg'
import list from '../assets/img/inspList.png'
import ems from '../assets/img/Emslide.png'
import badlink from '../assets/img/badLink.png'
import linkb from '../assets/img/badLink-ep.png'
import arrow1 from '../assets/img/arrow.png'
import arrow2 from '../assets/img/arrow2.png'



function Slide4() {

    return (
      <div>
        <button className='slide-back-button' onClick={() => navigateSlide(Slide3)}>Slide Back</button>
        <DialogueBox dialogues={Phishing} />
        <div className='Email'>  
          <img id='disp' src={dispense} className='bg2' alt="Warehouse packages" style={{display: "none", top:"3%", height:"500px"}} />
          <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />
          <img id='mailmanSmile' src={mailmanSmile} className='mailman Side image' alt="friendly mailman" style={{display: "none", width:'140px', top:'52%'}} />

          <img id='inspect' src={inspects} className='displays' alt='Package Inspection' style={{display:"none", width:"350px"}}/>
          <img id='list' src={list} className='inspect' alt='Inspection List' style={{display:"none"}}/>
          
          <img id='ems' src={ems} className='inspect' alt='Suspicious Email' style={{display:"none"}}/>
          <img id='badLink' src={badlink} className='inspect2' alt='Suspicious Link' style={{display:"none"}}/>
          <img id='links' src={linkb} className='inspect3' alt='Suspicious Link' style={{display:"none"}}/>
          <img id='ems2' src={ems} className='inspect2' alt='Suspicious Email' style={{display:"none", height:"400px", top:"8%"}}/>

          <img id='arrow1' src={arrow1} className='arrow' alt='Pointer' style={{display:"none"}}/>
          <img id='arrow2' src={arrow1} className='arrow' alt='Pointer' style={{display:"none",top:"33%",left:"62%"}}/>
          <img id='arrow3' src={arrow1} className='arrow' alt='Pointer' style={{display:"none",top:"43%"}}/>
          <img id='arrow4' src={arrow2} className='arrow2' alt='Pointer' style={{display:"none"}}/>
          <img id='arrow5' src={arrow2} className='arrow2' alt='Pointer' style={{display:"none",transform:"scaleY(-1)", left:"50%", top:"42%"}}/>
  
        </div>
      </div>
    );
  }
  
  export default Slide4;