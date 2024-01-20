import React, { useState, useEffect } from 'react';
import { navigateSlide, toggleElements, createDialogueBox } from '../../../assets/js/helpers';
import Draggable from 'react-draggable';
import DialogueBox from '../../../components/DialogueBox';
import { dialogues2, randyThanks, randyCongrats, ripRandy } from '../assets/dialogues';
import Slide1 from './Slide1';
import robot from '../assets/img/robot-helper.gif';
import randySpeaker from '../assets/img/malware/ransomware/randy-speaker.png';
import randy from '../assets/img/malware/ransomware/randy.gif';
import coin from '../assets/img/malware/ransomware/coin.gif';
import bank from '../assets/img/malware/ransomware/treasure-chest.gif';
import file from '../assets/img/malware/ransomware/file.png';
import fileOpen from '../assets/img/malware/ransomware/access-folder.gif';
import emptyDrive from '../assets/img/malware/ransomware/drive-empty.png';
import folderDrive from '../assets/img/malware/ransomware/drive-folder.png';
import nuclearButton from '../assets/img/malware/reset-computer.gif';
import antivirusButton from '../assets/img/malware/run-antivirus.gif';
import exorciseSword from '../assets/img/malware/sword.gif';
import exorciseFire from '../assets/img/malware/fires.gif';
import randyGrave from '../assets/img/malware/grave.png';

function Slide2() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const fileContainer = document.getElementById('file-container');
    const fileImage = document.getElementById('file-unopened');
    const rect = fileContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const height = fileContainer.offsetHeight;
    const width = fileContainer.offsetWidth;
    const imgHeight = fileImage.offsetHeight;
    const imgWidth = fileImage.offsetWidth;

    let newX = x < width / 2 ? width - imgWidth : 0;
    let newY = y < height / 2 ? height - imgHeight : 0;

    setStyle({
      left: `${newX}px`,
      top: `${newY}px`,
      position: 'absolute',
      transition: '0.5s ease'
    });
  };

  useEffect(() => {
    const fileContainer = document.getElementById('file-container');
    fileContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      fileContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [coinClass, setCoinClass] = React.useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [coinCount, setCoinCount] = useState(0); // Add a coin counter
  
  const giveCoin = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let coinElement = document.getElementById("coin");
      coinElement.style.display = "block"; // Show the image
      setCoinClass("coin"); // Start the animation
      setTimeout(() => {
        setCoinClass(""); // Reset the animation
        coinElement.style.display = "none"; // Hide the image again
        setIsAnimating(false); // Allow the animation to be started again
        setCoinCount(coinCount + 1); // Increment the coin counter
        if (coinCount + 1 === 7) { 
          toggleElements(['ransomware-play', 'coin-counter', 'bank', 'give-coin-button', 'file-container'], false, true).then(() => {
              createDialogueBox(randyThanks);
              toggleElements(['file-opened-div']);
          });
        }
      }, 500); // Do this after 0.5 seconds
    }
  };

  const closeDialogueBox = () => {
    const dialogueBox = document.querySelector('.dialogue-box');
    if (dialogueBox) {
      dialogueBox.classList.add('closing');
      setTimeout(() => {
        dialogueBox.remove();
      }, 500);
    }
  };

  const DraggableImage = ({src, alt}) => {
    const handleDragStop = () => {
      const draggableElement = document.getElementById('movable-div');
      const targetElement = document.getElementById('google-drive-empty');
  
      const draggableRect = draggableElement.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
  
      const doesOverlap = (
        draggableRect.right > targetRect.left &&
        draggableRect.left < targetRect.right &&
        draggableRect.bottom > targetRect.top &&
        draggableRect.top < targetRect.bottom
      );
  
      if (doesOverlap) {
        closeDialogueBox();
        toggleElements(['google-drive-upload']).then(() =>
        toggleElements(['google-drive-empty', 'file-opened-div'], false, true)).then(() =>
        createDialogueBox(randyCongrats));
      }
    };
  
    return (
      <Draggable
        axis="both"
        handle="#movable-div"
        grid={[25, 25]}
        onStop={handleDragStop}
        >
        <div id="movable-div" className='file-open-div'>
          <img className="file-open-img" src={src} alt={alt}/>
        </div>
      </Draggable>
    );
  };

  const [swordClass, setSwordClass] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false); // New state variable
  
  const lunchSword = () => {
      if (!isAnimating && !hasAnimated) { // Check if the function has been called before
          setIsAnimating(true);
          setHasAnimated(true); // Set the state variable to true after the function is called
          let imageElement = document.getElementById("burning-sword");
          imageElement.style.display = ""; // Show the image
          setSwordClass("move-diagonal"); // Start the animation
          setIsAnimating(false);
          setTimeout(() => {
              toggleElements(['ransomware', 'burning-sword', 'nuclear-option', 'antivirus-option'], false, true).then(() =>
              closeDialogueBox()).then(() =>
              toggleElements(['ransomware-speaker'], false, true)).then(() =>
              toggleElements(['randy-grave'])).then(() =>
              createDialogueBox(ripRandy));
          }, 800); // Do this after 0.8 seconds
      }
  };

  const createExplosions = () => {
    let imageElement = document.getElementById("explosions");
    if (imageElement) {
      imageElement.style.display = ""; // Show the image
      toggleElements(['ransomware', 'nuclear-option', 'antivirus-option'], false, true);
      setTimeout(() => {
        toggleElements(['explosions'], false, true).then(() =>
        closeDialogueBox()).then(() =>
        toggleElements(['ransomware-speaker'], false, true)).then(() =>
        toggleElements(['randy-grave'])).then(() =>
        createDialogueBox(ripRandy));
      }, 3000); // Do this after 0.8 seconds
    }
  };


  return (
    <div>
      <button className='slide-back-button' onClick={() => navigateSlide(Slide1)}>Slide Back</button>
      <DialogueBox dialogues={dialogues2} />
      <button id="give-coin-button" className='golden-button' style={{display: "none"}} onClick={giveCoin}>GIVE 1 COIN</button>
      <img id="coin" className={coinClass} style={{display: "none"}} src={coin} alt="coin" />
      <img id="bank" className='treasure-chest' style={{display: "none"}} src={bank} alt="bank" />
      <p id="coin-counter" className='coin-counter' style={{display: "none"}}>{`COINS GIVEN: ${coinCount}`}</p>

      <img id="ransomware" className="middle-position" style={{display: "none"}} src={randy} alt="ransomware" />
      <img id="ransomware-play" className="position-img-right" style={{display: "none"}} src={randy} alt="ransomware" />

      <img id="ransomware-speaker" className="speaking-character" style={{display: "none"}} src={randySpeaker} alt="ransomware" />
      <img id="robot" className="speaking-character" src={robot} alt="robot" />

      <div id="file-container" className="file-space" style={{display: "none"}}>
        <img id="file-unopened" className="image file-img" style={style} src={file} alt="file" />
      </div>
      <div id="file-opened-div" style={{display: "none"}}>
        <DraggableImage src={fileOpen} alt="file-opened"/>
      </div>
      <img id="google-drive-empty" className="google-drive" style={{display: "none"}} src={emptyDrive} alt="emmpty google drive" />
      <img id="google-drive-upload" className="google-drive" style={{display: "none"}} src={folderDrive} alt="google drive with folder" />

      <img id="nuclear-option" className="final-option-button nuclear-button" style={{display: "none"}} src={nuclearButton} alt="nuclear option button" onClick={createExplosions}/>
      <img id="antivirus-option" className="final-option-button antivirus-button" style={{display: "none"}} src={antivirusButton} alt="anti-virus button" onClick={lunchSword}/>
      <img id="burning-sword" className={`exorcise-sword ${swordClass}`} style={{display: "none"}} src={exorciseSword} alt="burning sword" />
      <img id="explosions" className="exorcise-fire" src={exorciseFire} style={{display: "none"}} alt="fire explosions" />

      <img id="randy-grave" className="middle-position" src={randyGrave} style={{display: "none"}} alt="randy's grave" />
    </div>
  );
}

export default Slide2;
