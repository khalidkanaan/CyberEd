import React from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { dialogues2 } from '../assets/dialogues'
import Slide1 from './Slide1';

function Slide2() {
  return (
    <div>
      <h1>Slide 2</h1>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide1)}>Slide Back</button>
      <DialogueBox dialogues={dialogues2} />
    </div>
  );
}

export default Slide2;
