import React, {useState} from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { Settings } from '../assets/js/dailogues'
import Slide2 from './Slide2';
import Slide35 from './Slide3-2';
import inside from '../assets/img/inside-intro.jpg'
import face from '../assets/img/Mailman-face.png'
import Tfa from '../assets/img/2FA.jpg'
import Sqs from '../assets/img/SecQs.jpg'
import Rcv from '../assets/img/Recovery.jpg'
import TfGif from '../assets/img/2FA.gif'
import mailmanFront from '../assets/img/Mailman-front-pkg.png'
import waits from '../assets/img/Mailman-waits-anim.gif'
import clipboard from '../assets/img/clipboard.png'
import phone from '../assets/img/phone.png'
import laptop from '../assets/img/laptop.png'
import secQs from '../assets/img/security-questions.gif'

function VerifyInputForm() {
  const [input, setInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
    setIsSuccess(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    
    if (input.trim().toUpperCase() === 'CGY7X') {
      setIsSuccess(true);
      // Set a delay before navigating to the next slide
      setTimeout(() => {
        navigateSlide(Slide35);
      }, 500); 
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} className='inputForm'>
        <label>
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className='outputBox'>
        {isSubmitted ? (
          isSuccess ? <p className='output'>✔</p> : <p className='output' style={{color: 'red'}}>X</p>
        ) : null}
      </div>
    </div>
  );
}

function Slide3() {

  return (
    <div>
      <h1>Email Security Settings</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide2)}>Slide Back</button>
      <DialogueBox dialogues={Settings} />
      <div className='Email'>
        <img id='inside' src={inside} className='bg2' alt="Warehouse inside" style={{display: "none"}} />
        <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />

        <img id='Tfa' src={Tfa} className='displays image' alt='Two-factor Authentication' style={{display: 'none'}} />
        <img id='Sqs' src={Sqs} className='displays image' alt='Security Question' style={{display: 'none', left:'42%'}} />
        <img id='Rcv' src={Rcv} className='displays image' alt='Recovery Email' style={{display: 'none', left:'62%'}} />
        <img id='2fa' src={TfGif} className='displays image' alt='Two-factor Authentication' style={{display: 'none', left:'43%',border:'none'}}/>
        <img id='clip' src={clipboard} className='clip image' alt='Sign Here' style={{display: 'none'}} />
        <img id='phone' src={phone} className='clip image' alt='Phone with code' style={{display: 'none',height:'300px',left:'65%'}} />
        <img id='laptop' src={laptop} className='laptop image' alt='Attempt Login' style={{display: 'none'}} />
        

        <img id='mailmanFront' src={mailmanFront} className='mailman Front image' alt="friendly mailman" style={{display: "none", width:'180px', top:'47%'}} />
        <img id='waits' src={waits} className='mailman Front image' alt="impateint mailman" style={{display: "none", width:'180px', top:'50%'}} />


        <div id='verifyFormContainer' className='verify-input-form' style={{display:'none'}}>
          <VerifyInputForm/>
        </div>
        
        <div id='secQ-img-div' className='image-container example-image-container' style={{display: "none"}} >
          <img id='secQs' src={secQs} alt="Username Examples"/>
        </div>

      </div>
    </div>
  );
}

export default Slide3;
