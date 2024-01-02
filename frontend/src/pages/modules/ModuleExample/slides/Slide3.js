import React from 'react';
import DialogueBox from './DialogueBox';

function Slide3() {
  const dialogues = ['Slide 3 Dialogue 1', 'Slide 3 Dialogue 2'];

  return (
    <div>
      <h1>Slide 3</h1>
      <DialogueBox dialogues={dialogues} />
    </div>
  );
}

export default Slide3;
