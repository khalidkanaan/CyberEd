import React from 'react';
import DialogueBox from '../../../../components/DialogueBox';

function Slide1() {
  const dialogues = [
    { text: 'Slide 1 Dialogue 1' },
    { text: 'Slide 1 Dialogue 2' },
    { text: 'Slide 1 Dialogue 3' },
  ];

  return (
    <div>
      <h1>Slide 1</h1>
      <DialogueBox dialogues={dialogues} />
    </div>
  );
}

export default Slide1;
