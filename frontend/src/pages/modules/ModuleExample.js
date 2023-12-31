import React, { useState, useEffect } from 'react';
import Module from '../../components/Module';
import DialogueBox from '../../components/DialogueBox';

function Module1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1300); // this is just adding a little bit of delay before showing the DialogueBox because the module page animation takes time
    return () => clearTimeout(timer);
  }, []);

  const dialogues = ['Hello, welcome to our game!', 'This is the second dialogue.', 'This is the last dialogue.'];

  return (
    <Module backLink="/" nextLink="/module2">  {/* You have to pass the previous module link and the next module link */}
      {isLoaded && <DialogueBox dialogues={dialogues} />}
    </Module>
  );
}

export default Module1;
