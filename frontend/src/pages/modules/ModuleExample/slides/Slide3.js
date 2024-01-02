import React from 'react';
import DialogueBox from '../../../../components/DialogueBox';

function Slide3() {
  const dialogues = [
    { text: 'Slide 3 Dialogue 1' },
    { text: 'Slide 3 Dialogue 2' },
    { text: 'Slide 3 Dialogue 3' },
  ];

  return (
    <div>
      <h1>Slide 3</h1>
      <DialogueBox dialogues={dialogues} />
    </div>
  );
}

export default Slide3;
