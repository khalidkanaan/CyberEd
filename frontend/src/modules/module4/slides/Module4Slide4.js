import React, { useState, useEffect, useRef } from 'react';
import DialogueBox from '../../../components/DialogueBox.js';
import { dialogues4 } from '../assets/Module4Dialogues.js';
import Cursor from '../components/CustomCursorComponent.js';
import FolderIcon from '../assets/img/malware/FolderIcon.png';
import ScanCircGif from '../assets/img/cursor/ScanCircGif.gif';
import DigiVirus from '../assets/img/cursor/DigiVirus1.gif';
import ScanSound from '../assets/img/cursor/ScanSound.mp3';
import PowerUp from '../assets/img/cursor/POWERUP3.gif';
import LevelUp from '../assets/img/cursor/LevelUP2.gif';


function Slide4() {
  ///
  const [isHovering1, setIsHovering1] = useState(false);
  const [scanProgress1, setScanProgress1] = useState(0);
  const scanProgressRef1 = useRef(scanProgress1);
  const [showRansomware1, setShowRansomware1] = useState(false);
  const progressIntervalRef1 = useRef(null);
  // Create a ref for the audio element
  const scanSoundRef = useRef(new Audio(ScanSound));
  const [showPowerUp, setShowPowerUp] = useState(false);



  useEffect(() => {
    scanProgressRef1.current = scanProgress1;
  }, [scanProgress1]);



  useEffect(() => {
    // Function to start scanning sound
    // Function to start scanning sound
    const startScanningSound = async () => {
      if (!scanSoundRef.current) return; // Ensure the ref is set

      try {
        await scanSoundRef.current.play();
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Play request was aborted:', error);
        } else {
          console.error('Failed to start scanning sound:', error);
        }
      }
    };

    const stopScanningSound = () => {
      const sound = scanSoundRef.current;
      if (sound && !sound.paused) {
        sound.pause();
        sound.currentTime = 0;
        // Assuming you may need to clean up or reset the reference after stopping
        // If you want to keep the sound loaded in the ref for future use, you might omit this line
        // scanSoundRef.current = null; // Uncomment this line if you want to remove the reference after stopping
      }
    };

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "e") {
        // Check each folder's hover state and start scanning if applicable
        if (isHovering1 && !progressIntervalRef1.current && scanProgress1 < 100) {
          startFolderScan(setScanProgress1, progressIntervalRef1, setShowRansomware1);
          console.log(isHovering1)

        }
      }
    };

    // Helper function to start the scanning process
    const startFolderScan = (setScanProgress, progressIntervalRef, setShowRansomware) => {
      progressIntervalRef.current = setInterval(() => {
        setScanProgress((prevProgress) => {
          const newProgress = prevProgress + 100 / 15; // Adjust time as needed
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
      startScanningSound(); // Assuming you have a function to handle the sound
    };



    const handleKeyUp = (event) => {
      if (event.key.toLowerCase() === "e") {
        stopScanningSound()
        setIsHovering1(false);
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
    // Adjusted function to handle hover and key press
    const checkAndSetHovering = (folderId) => {
      const cursorDiv = document.getElementById('my-div');
      const folderDiv = document.getElementById(folderId);

      if (folderDiv && cursorDiv) {
        const setIsHoveringFunction = getSetIsHoveringFunction(folderId);
        if (checkCollision(folderDiv, cursorDiv)) {
          setIsHoveringFunction(true);
          console.log(`Hovering over ${folderId}`);
          startScanningSound();
          // Prepare for keydown event when hovering
          const handleKeyDownWhileHovering = (event) => {
            if (event.key.toLowerCase() === "e") {
              console.log(`E pressed while hovering over ${folderId}`);
              // Start scanning process here
              const scanFunctionMapping = {
                'folder-1': () => startFolderScan(setScanProgress1, progressIntervalRef1, setShowRansomware1),

              };

              const scanFunction = scanFunctionMapping[folderId];
              if (scanFunction) scanFunction();
            }
          };

          // Add keydown event listener only while hovering
          document.addEventListener('keydown', handleKeyDownWhileHovering);

          // Remember to remove the event listener when no longer hovering
          const handleMouseLeave = () => {
            document.removeEventListener('keydown', handleKeyDownWhileHovering);
            setIsHoveringFunction(false); // Assuming mouse leave implies no longer hovering
          };
          folderDiv.addEventListener('mouseleave', handleMouseLeave, { once: true }); // Auto-remove listener after firing once

        } else {
          setIsHoveringFunction(false);
        }
      }
    };


    const checkForCollisionWithFolder = () => {
      const folderIds = ['folder-1']
      folderIds.forEach(folderId => {
        checkAndSetHovering(folderId);
      });
    };

    // Example of a possible mapping function
    function getSetIsHoveringFunction(folderId) {
      const mapping = {
        'folder-1': setIsHovering1,

      };
      return mapping[folderId];
    }





    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const collisionInterval = setInterval(checkForCollisionWithFolder, 100); // 
    return () => {
      clearInterval(collisionInterval); // Cleanup on unmount
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (progressIntervalRef1.current) {
        clearInterval(progressIntervalRef1.current);
      }
    };
  }, []);

  const observerRef = useRef();

  useEffect(() => {
    // Cleanup function to ensure we don't leave observers hanging
    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    // Function to setup observer
    const setupObserver = () => {
      const targetElement = document.querySelector('p');
      if (targetElement && targetElement.textContent.startsWith("Not to worry, young enforcer! ")) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setShowPowerUp(true);
              cleanupObserver();
            }
          });
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 1.0
        });

        observerRef.current.observe(targetElement);
      }
    };

    // Attempt to setup the observer
    setupObserver();

    // Periodically check if the element has been rendered and is ready to be observed
    const intervalId = setInterval(setupObserver, 1000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
      cleanupObserver(); // Disconnect the observer
    };
  }, []);
  return (
    <div>
      <h1>AVIE: UPDATE TUTORIAL</h1>
      <div id='folder-1' style={{ position: 'relative', display: 'inline-block', minHeight: '50px' }}>
        {scanProgress1 < 100 ? (
          <>
            <img src={FolderIcon} alt="Folder Icon" />
            {isHovering1 && (
              <>
                <img src={ScanCircGif} alt="Scanning" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                <div style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `${scanProgress1}%`, height: '100%', backgroundColor: 'rgba(1,79,98,255)' }}></div>
                </div>
              </>
            )}
          </>
        ) : showRansomware1 ? (
          <>
            <div id='digi-6' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
              <img src={DigiVirus} alt="DigiVirus" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div id="randy-health-bar-6" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {showPowerUp && (
        <div id="PowerUp" style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          width: '400px',
          height: '400px', // Set the height to 200px as well
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden', // Prevents content from spilling outside the div
        }}>
          <img src={PowerUp} alt="Power Up" style={{
            width: '100%', // Make the image fill the container width
            height: '100%', // Make the image fill the container height
            position: 'absolute', // Position absolutely within the relative parent div
            top: '0',
            left: '0',
            zIndex: '1', // Ensure it's below LevelUp if they don't perfectly overlay
          }} />
          <img src={LevelUp} alt="Level Up" style={{
            width: '50%', // Make the image fill the container width
            height: '50%', // Make the image fill the container height
            position: 'absolute', // Position absolutely within the relative parent div
            top: '43%',
            left: '25%',
            zIndex: '2', // Ensures this image overlays on top of PowerUp
            opacity: '85%'
          }} />
        </div>
      )}
      <DialogueBox dialogues={dialogues4} />
      <Cursor />
    </div>
  );
}

export default Slide4;
