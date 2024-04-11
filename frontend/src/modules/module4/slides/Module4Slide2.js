import React, { useState, useEffect, useRef } from 'react';
import DialogueBox from '../../../components/DialogueBox.js';
import { dialogues2 } from '../assets/Module4Dialogues.js';
import Cursor from '../components/CustomCursorComponent.js';
import FolderIcon from '../assets/img/malware/FolderIcon.png';
import ScanCircGif from '../assets/img/cursor/ScanCircGif.gif';
import ransomware from '../../../modules/threats/assets/img/malware/ransomware/randy.gif';
import ScanSound from '../assets/img/cursor/ScanSound.mp3';
function Slide2() {
  const [isHoveringFolder, setisHoveringFolder] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const scanProgressRef = useRef(scanProgress);
  const [showRansomware, setShowRansomware] = useState(false);
  const progressIntervalRef = useRef(null);

  // Create a ref for the audio element
  const scanSoundRef = useRef(new Audio(ScanSound));

  useEffect(() => {
    scanProgressRef.current = scanProgress;
  }, [scanProgress]);

     

  useEffect(() => {
    // Function to start scanning sound
    const startScanningSound = () => {
      scanSoundRef.current.play();
    };

    // Function to stop scanning sound
    const stopScanningSound = () => {
      scanSoundRef.current.pause();
      scanSoundRef.current.currentTime = 0; // Reset audio playback to the start
    };

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "e" && !progressIntervalRef.current && scanProgress < 100) {
        setisHoveringFolder(true);
        progressIntervalRef.current = setInterval(() => {
          setScanProgress((prevProgress) => {
            const newProgress = prevProgress + 100 / 15;
            if (newProgress >= 100) {
              clearInterval(progressIntervalRef.current);
              progressIntervalRef.current = null;
              stopScanningSound();

              setShowRansomware(true);
              return 100;
            }
            return newProgress;
          });
        }, 100);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key.toLowerCase() === "e") {
        stopScanningSound()
        setisHoveringFolder(false);
      }
    };

    function checkCollision(element1, element2) {
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();
  
      return (
          rect1.x < rect2.x + rect2.width &&
          rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height &&
          rect1.y + rect1.height > rect2.y
      );
  }
  
      //Scanning
      const checkForCollisionWithFolder = () => {
        const folderDiv = document.getElementById('folder');
        const cursorDiv = document.getElementById('my-div');
        if (folderDiv && cursorDiv) {
          if (checkCollision(folderDiv,cursorDiv)) {
                      // Cursor is in contact with the folder div
                      // Trigger scanning logic here
                      startScanningSound();

                      setisHoveringFolder(true); // Start scanning when cursor is in contact with the folder
              } else {
                  // Cursor is not in contact with the folder div
                  // Stop scanning
                  stopScanningSound();
                  setisHoveringFolder(false);
              }
          }
      }


    

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const collisionInterval = setInterval(checkForCollisionWithFolder, 100); // 
    return () => {
        clearInterval(collisionInterval); // Cleanup on unmount
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>AVIE: SCANNING TUTORIAL</h1>
      <div  id= 'folder' style={{ position: 'relative', display: 'inline-block', minHeight: '50px' }}>
        {scanProgress < 100 ? (
          <>
            <img src={FolderIcon} alt="Folder Icon" />
            {isHoveringFolder && (
              <>
                <img src={ScanCircGif} alt="Scanning" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                <div style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `${scanProgress}%`, height: '100%', backgroundColor: 'rgba(1,79,98,255)' }}></div>
                </div>
              </>
            )}
          </>
        ) : showRansomware ? (
          <>
           <div id='randy-1' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
      <img src={ransomware} alt="Ransomware" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <div id="randy-health-bar-1" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
        <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
      </div>
    </div>
          </>
        ) : null}
      </div>

      <DialogueBox dialogues={dialogues2} />
      <Cursor />
    </div>
  );
}

export default Slide2;
