import React from 'react';
import { navigateSlide, toggleElements} from '../../../assets/js/helpers';
import Draggable from 'react-draggable';
import DialogueBox from '../../../components/DialogueBox';
import { DigitalIdentity } from '../assets/js/dailogues'
import Slide1 from './Slide1';
import Slide3 from './Slide3-1';
import priv from '../assets/img/private.jpg'
import face from '../assets/img/Mailman-face.png'
import mailman from '../assets/img/Mailman-idle.png'
import MS from '../assets/img/Mailman-toside.png'
import point from '../assets/img/Mailman-point.png'
import NS from '../assets/img/Mailman-NS.png'
import Emex from '../assets/img/EmEx.png'
import door from '../assets/img/door.png'
import unlock from '../assets/img/unlock.gif'
import key from '../assets/img/Key.png'



function Slide2() {

  const closeDialogueBox = () => {
    const dialogueBox = document.querySelector('.dialogue-box');
    if (dialogueBox) {
      dialogueBox.classList.add('closing');
      setTimeout(() => {
        dialogueBox.remove();
      }, 500);
    }
  };

  const DraggableImage = ({src, alt}) => {
    const handleDragStop = () => {
      const draggableElement = document.getElementById('movable-div');
      const targetElement = document.getElementById('door');
  
      const draggableRect = draggableElement.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
  
      const doesOverlap = (
        draggableRect.right > targetRect.left &&
        draggableRect.left < targetRect.right &&
        draggableRect.bottom > targetRect.top &&
        draggableRect.top < targetRect.bottom
      );
  
      if (doesOverlap) {
        closeDialogueBox();
        toggleElements(['door', 'key-move-div'], false, true).then(() =>
        toggleElements(['unlock'],true,false,2500)).then(() =>
        navigateSlide(Slide3));
      }
    };
  
    return (
      <Draggable
        axis="both"
        handle="#movable-div"
        grid={[25, 25]}
        onStop={handleDragStop}
        >
        <div id="movable-div">
          <img className="key image" src={src} alt={alt} style={{pointerEvents:"none"}}/>
        </div>
      </Draggable>
    );
  };

  return (
    <div>
      <h1>Securing Digital Identity and Crafting Trusted Email Addresses</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide1)}>Slide Back</button>
      <DialogueBox dialogues={DigitalIdentity} />
      <div className='Email'>
        <img id='private' src={priv} className='bg2' alt="Private warehouse" style={{display: "none", margin:'0'}} />

        <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />

        <img id='mailman' src={mailman} className='mailmanalt2 image' alt="friendly mailman" style={{display: "none"}} />
        <img id='NS' src={NS} className='mailmanalt image' alt="friendly mailman" style={{display: "none"}} />
        <img id='MS' src={MS} className='mailmanalt2 image' alt="friendly mailman" style={{display: "none", transform: 'scaleX(-1)', top: '30%'}} />
        <img id='point' src={point} className='mailmanalt3 image' alt="friendly mailman" style={{display: "none"}} />

        <div id='example-img-div' className='image-container example-image-container' style={{display: "none"}} >
          <img id='exampleEm' src={Emex} alt="Username Examples"/>
        </div>
        
        <img id='door' src={door} className='door image' alt="Warehouse door" style={{display: "none"}} />
        <img id='unlock' src={unlock} className='door image' alt='Unlocking' style={{display: "none"}} />
        <div id='key-move-div' style={{display: "none"}}>
          <DraggableImage src={key} alt="Warehouse key"/>
        </div>

      </div>
    </div>
  );
}

export default Slide2;
