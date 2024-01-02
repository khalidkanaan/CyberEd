import React from 'react';
import DialogueBox from './DialogueBox';

function Slide2() {
  const dialogues = ['Slide 2 Dialogue 1', 'Slide 2 Dialogue 2'];

  return (
    <div>
      <h1>Slide 2</h1>
      <DialogueBox dialogues={dialogues} />
    </div>
  );
}

export default Slide2;
