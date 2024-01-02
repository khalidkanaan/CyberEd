import React from 'react';
import DialogueBox from './DialogueBox';

function Slide1() {
  const dialogues = ['Slide 1 Dialogue 1', 'Slide 1 Dialogue 2'];

  return (
    <div>
      <h1>Slide 1</h1>
      <DialogueBox dialogues={dialogues} />
    </div>
  );
}

export default Slide1;
