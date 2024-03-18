import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { dialogues3 } from '../assets/dialogues'
import Slide4 from './Slide4';

function Slide5() {

  return (
    <div>
      <h1>Slide 5</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide4)}>Slide Back</button>
      <DialogueBox dialogues={dialogues3} />
    </div>
  );
}

export default Slide5;
