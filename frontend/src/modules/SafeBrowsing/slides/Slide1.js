import React from 'react';
import DialogueBox from '../../../components/DialogueBox';
import { intro } from '../assets/dialogues';


function Slide1() {
    return (
      <div >
  
        <DialogueBox dialogues={intro}/>
        
      </div>
    );
  }
  
  export default Slide1;