import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/dialogue.css'
import { toggleElements } from '../assets/js/helpers';

const DialogueBox = ({ dialogues }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isDialogueOpen, setIsDialogueOpen] = useState(true);
  const [currentDialogue, setCurrentDialogue] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [lastToggledElements, setLastToggledElements] = useState(null); // track last toggled DOM elements for back button
  const [isClosing, setIsClosing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const animationDuration = 500; // this delay value should match the duration of the opening animation we define in dialogue.css
  const timerId = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      let dialogue = dialogues[currentDialogueIndex].text;
      let i = -1;
      setCurrentDialogue('');
      setIsTyping(true);
      timerId.current = setInterval(() => {
        if (i < dialogue.length - 1) {
          i++;
          setCurrentDialogue((prevDialogue) => prevDialogue + dialogue[i]);
        } else {
          clearInterval(timerId.current);
          setIsTyping(false);
        }
      }, 50); // you can adjust the typic speed here

      // check if there is a function to execute
      if (dialogues[currentDialogueIndex].action) {
        dialogues[currentDialogueIndex].action();

        const actionStr = dialogues[currentDialogueIndex].action.toString();

        if (actionStr.includes('toggleElements')) {
          // If the the action is the toggleElements function, store the ids of the elements that were toggled
          setLastToggledElements(dialogues[currentDialogueIndex].ids);
        } else {
          // If it's not, clear the lastToggledElements state
          setLastToggledElements(null);
        }
      }
    }
    return () => clearInterval(timerId.current);
  }, [currentDialogueIndex, dialogues, isAnimating]);

  const handleNext = async () => {
    if (isTyping) {
      clearInterval(timerId.current);
      setCurrentDialogue(dialogues[currentDialogueIndex].text);
      setIsTyping(false);
    } else if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      setIsClosing(true); // start the closing animation
      // timer to hide the dialogueBox after closing animation is done.
      setTimeout(() => setIsHidden(true), animationDuration);
      // Handles our okActions
      if (dialogues[currentDialogueIndex].okActions) {
        if (Array.isArray(dialogues[currentDialogueIndex].okActions)) {
          // Execute each okAction in order
          for (const okAction of dialogues[currentDialogueIndex].okActions) {
            await okAction();
          }
        } else {
          // Execute the single okAction
          await dialogues[currentDialogueIndex].okActions();
        }
      }
      setTimeout(() => {
        setIsDialogueOpen(false); // remove the dialogue box after the animation
      }, animationDuration); // This should be equal to the duration of your closing animation
    }
  };

  const handleBack = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogue('');
      setCurrentDialogueIndex(currentDialogueIndex - 1);

      // clicking the back button in the dialogue box hides the elements
      if (lastToggledElements) {
        toggleElements(lastToggledElements, false);
      }
    }
  };

  if (!isDialogueOpen) {
    return null;
  }

  return (
    <div className={`dialogue-box ${isClosing ? 'closing' : ''} ${isHidden ? 'hidden' : ''}`}>
      {!isAnimating && (
        <div className={`${isClosing ? 'hidden' : ''}`}>
          <p>{currentDialogue}</p>
          <button onClick={handleBack} disabled={currentDialogueIndex === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={currentDialogueIndex === dialogues.length - 1 && !isDialogueOpen}>
            {currentDialogueIndex === dialogues.length - 1 ? 'OK' : isTyping ? 'Skip' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};


export default DialogueBox;
