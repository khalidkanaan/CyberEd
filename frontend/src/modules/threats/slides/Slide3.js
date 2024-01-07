import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { dialogues3 } from '../assets/dialogues'
import Slide2 from './Slide2';

function Slide3() {

  return (
    <div>
      <h1>Slide 3</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide2)}>Slide Back</button>
      <DialogueBox dialogues={dialogues3} />
    </div>
  );
}

export default Slide3;
