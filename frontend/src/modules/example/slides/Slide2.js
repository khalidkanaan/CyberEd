import React from 'react';
import { toggleElements } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';

function Slide2() {

  const ids = ['Id1', 'Id2', 'Id3'];

  const dialogues = [
    { text: 'Hello, world!' },
    { text: 'How are you?', action: () => console.log('I am fine') },
    { text: 'Can you do nothing?' },
    {
      text: 'Show some HTML elements. You can click the back button to hide them. ' +
        'All the elements that you are creating in your slides should be hidden, ' +
        'so display is set to none. You can decide the order in which you want ' +
        'your elements to appear based on their position in the array.',
      action: () => toggleElements(ids),
      ids: ids,
    },
  ];

  return (
    <div>
      <h1>Slide 2</h1>
      <DialogueBox dialogues={dialogues} />
      <div id="Id1" style={{width: "50px", height: "50px", backgroundColor: "red", display: "none"}}></div>
      <div id="Id2" style={{width: "50px", height: "50px", backgroundColor: "green", display: "none"}}></div>
      <div id="Id3" style={{width: "50px", height: "50px", backgroundColor: "blue", display: "none"}}></div>
    </div>
  );
}

export default Slide2;
