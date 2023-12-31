import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modules.css'
import BasePage from '../BasePage';
import BackButton from '../../assets/img/module-back.gif'
import NextButton from '../../assets/img/module-next.gif'
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
    <BasePage>
      <div className='new-window'>
        <Link to="/">
          <img src={BackButton} alt="back" className="back-button"/>
        </Link>
        <Link to="/module2">
          <img src={NextButton} alt="next" className="next-button"/>
        </Link>
        <div className='module-window'>
          {isLoaded && <DialogueBox dialogues={dialogues} />}
        </div>
      </div>
    </BasePage>
  );
}

export default Module1;
