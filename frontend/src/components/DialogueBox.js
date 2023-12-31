import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/dialogue.css'

const DialogueBox = ({ dialogues }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isDialogueOpen, setIsDialogueOpen] = useState(true);
  const [currentDialogue, setCurrentDialogue] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerId = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // delay should match the duration of the opening animation we define in dialogue.css
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      let dialogue = dialogues[currentDialogueIndex];
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
    }
    return () => clearInterval(timerId.current);
  }, [currentDialogueIndex, dialogues, isAnimating]);
  
  const handleNext = () => {
    if (isTyping) {
      clearInterval(timerId.current);
      setCurrentDialogue(dialogues[currentDialogueIndex]);
      setIsTyping(false);
    } else if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      setIsDialogueOpen(false);
    }
  };

  const handleBack = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogue('');
      setCurrentDialogueIndex(currentDialogueIndex - 1);
    }
  };

  if (!isDialogueOpen) {
    return null;
  }

  return (
    <div className="dialogue-box">
      {!isAnimating && (
        <>
          <p>{currentDialogue}</p>
          <button onClick={handleBack} disabled={currentDialogueIndex === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={currentDialogueIndex === dialogues.length - 1 && !isDialogueOpen}>
            {currentDialogueIndex === dialogues.length - 1 ? 'OK' : isTyping ? 'Skip' : 'Next'}
          </button>
        </>
      )}
    </div>
  );
};


export default DialogueBox;
