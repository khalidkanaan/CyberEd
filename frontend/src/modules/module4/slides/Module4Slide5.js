import React, { useState, useEffect, useRef } from 'react';
import { navigateSlide } from '../../../assets/js/helpers.js';
import DialogueBox from '../../../components/DialogueBox.js';
import { dialogues5 } from '../assets/Module4Dialogues.js';
import Slide3 from './Module4Slide3.js';
import Cursor from '../components/CustomCursorComponent.js';
import LaserSound from '../assets/img/cursor/HackingSound.mp3'; 
import ScanSound from '../assets/img/cursor/ScanSound.mp3'; 
import DigiVirus from '../assets/img/cursor/DigiVirus1.gif';

import GameOverSound from '../assets/img/cursor/MarioGameOver.mp3'; 
import GameWinSound from '../assets/img/cursor/SmashGameOver.mp3'; 


import DataAsset from '../assets/img/cursor/DATA3.gif';
import LaserHit from '../assets/img/cursor/LaserHit.gif';
import Pop from '../assets/img/cursor/FlashW1.gif'; 
import FolderIcon from '../assets/img/malware/FolderIcon.png';
import ScanCircGif from '../assets/img/cursor/ScanCircGif.gif';
import ransomware from '../../../modules/threats/assets/img/malware/ransomware/randy.gif';
import trojan from '../../../modules/threats/assets/img/malware/trojan/trojan.gif';

import PowerUp from '../assets/img/cursor/POWERUP3.gif';
import LevelUp from '../assets/img/cursor/LevelUP2.gif';
function Slide5() {
  const [laser1On, setLaser1On] = useState(false);
  const [laser2On, setLaser2On] = useState(false);
  const [laser3On, setLaser3On] = useState(false);
  const [laser4On, setLaser4On] = useState(false);
  const [dataAssetHealth, setDataAssetHealth] = useState(100);
  const [assetDestroyed, setAssetDestroyed] = useState(false);
  const [showPowerUp, setShowPowerUp] = useState(false);

  const [folders, setFolders] = useState({
    isHovering: [false, false, false, false],
    scanProgress: [0, 0, 0, 0],
    showRansomware: [false, false, false, false],
  });
  

  ///
  const [isHovering1, setIsHovering1] = useState(false);
const [scanProgress1, setScanProgress1] = useState(0);
const scanProgressRef1 = useRef(scanProgress1);
const [showRansomware1, setShowRansomware1] = useState(false);
const progressIntervalRef1 = useRef(null);

const [isHovering2, setIsHovering2] = useState(false);
const [scanProgress2, setScanProgress2] = useState(0);
const scanProgressRef2 = useRef(scanProgress2);
const [showRansomware2, setShowRansomware2] = useState(false);
const progressIntervalRef2 = useRef(null);

const [isHovering3, setIsHovering3] = useState(false);
const [scanProgress3, setScanProgress3] = useState(0);
const scanProgressRef3 = useRef(scanProgress3);
const [showRansomware3, setShowRansomware3] = useState(false);
const progressIntervalRef3 = useRef(null);

const [isHovering4, setIsHovering4] = useState(false);
const [scanProgress4, setScanProgress4] = useState(0);
const scanProgressRef4 = useRef(scanProgress4);
const [showRansomware4, setShowRansomware4] = useState(false);
const progressIntervalRef4 = useRef(null);
const [gameWin, setGameWin] = useState(false);

    useEffect(() => {
    const checkRandyVisibility = () => {
        const randys = ['randy-2', 'randy-3', 'digi-7', 'digi-8'];
        const allShowRansomware = [showRansomware1, showRansomware2, showRansomware3, showRansomware4].every(Boolean);
        console.log(allShowRansomware)
        const allRandyNotVisible = randys.every((id) => {
          const randyElement = document.getElementById(id);
          // If the element does not exist, it has been removed, and we consider it not visible
          return !randyElement;
      });
        console.log(allRandyNotVisible)
        return allShowRansomware && allRandyNotVisible;
    };

    // Conditionally show power-up when showRansomware3 is true
    if (showRansomware3) {
        setShowPowerUp(true); // Assuming setShowPowerUp is a state setter for showing the power-up
    }

    const interval = setInterval(() => {
        if (checkRandyVisibility()) {
            // All randys are set to show, but none are visible in the DOM
            setGameWin(true);
            console.log('Win')
            clearInterval(interval); // Stop polling once the condition is met
            const gameWinSound = new Audio(GameWinSound);
            gameWinSound.play().catch(e => console.error('Failed to play the win sound:', e));
        }
        console.log('no')
    }, 1000); // Polling interval of 1000 milliseconds (1 second)

    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [showRansomware1, showRansomware2, showRansomware3, showRansomware4, gameWin, setShowPowerUp]);


  // Create a ref for the audio element
  const scanSoundRef = useRef(new Audio(ScanSound));

  useEffect(() => {
    scanProgressRef1.current = scanProgress1;
  }, [scanProgress1]);
  
  useEffect(() => {
    scanProgressRef2.current = scanProgress2;
  }, [scanProgress2]);
  
  useEffect(() => {
    scanProgressRef3.current = scanProgress3;
  }, [scanProgress3]);
  
  useEffect(() => {
    scanProgressRef4.current = scanProgress4;
  }, [scanProgress4]);
  

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
        } else if (isHovering2 && !progressIntervalRef2.current && scanProgress2 < 100) {
          startFolderScan(setScanProgress2, progressIntervalRef2, setShowRansomware2);
        } else if (isHovering3 && !progressIntervalRef3.current && scanProgress3 < 100) {
          startFolderScan(setScanProgress3, progressIntervalRef3, setShowRansomware3);
        } else if (isHovering4 && !progressIntervalRef4.current && scanProgress4 < 100) {
          startFolderScan(setScanProgress4, progressIntervalRef4, setShowRansomware4);
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
        setIsHovering2(false);
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
            'folder-2': () => startFolderScan(setScanProgress2, progressIntervalRef2, setShowRansomware2),
            'folder-3': () => startFolderScan(setScanProgress3, progressIntervalRef3, setShowRansomware3),
            'folder-4': () => startFolderScan(setScanProgress4, progressIntervalRef4, setShowRansomware4),
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
        const folderIds = ['folder-1', 'folder-2', 'folder-3', 'folder-4'];
        folderIds.forEach(folderId => {
            checkAndSetHovering(folderId);
        });
    };
    
    // Example of a possible mapping function
    function getSetIsHoveringFunction(folderId) {
        const mapping = {
            'folder-1': setIsHovering1,
            'folder-2': setIsHovering2,
            'folder-3': setIsHovering3,
            'folder-4': setIsHovering4,
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

//

// Create a ref for the audio element

  

  // Store sound instances for each laser
  const laserSoundsRef = useRef({});

  const playLaserSound = async (laserId) => {
    const sound = new Audio(LaserSound);
    laserSoundsRef.current[laserId] = sound; // Store the sound object for later access
    try {
      await sound.play();
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Play request was aborted', error);
      } else {
        throw error; // Handle or re-throw other errors
      }
    }
  };
  


  const stopLaserSound = (laserId) => {
    const sound = laserSoundsRef.current[laserId];
    if (sound && !sound.paused) {
      sound.pause();
      sound.currentTime = 0;
      delete laserSoundsRef.current[laserId]; // Remove the reference after stopping
    }
  };
  

  

  // 



    // Function to check collision for all folders
   
    

    // Assuming checkCollision and other necessary functions are defined and updated
    // to handle multiple folders.
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



  const checkCollisionWithLaser = () => {
    const barrierDiv = document.getElementById('my-div2');

    // Ensure barrierDiv exists
    if (!barrierDiv) return;

    // Define lasers and their respective setState functions
    const laserData = [
      { lineId: 'Line1', laserId: 'Laser1', setState: setLaser1On },
      { lineId: 'Line2', laserId: 'Laser2', setState: setLaser2On },
      { lineId: 'Line3', laserId: 'Laser3', setState: setLaser3On },
      { lineId: 'Line4', laserId: 'Laser4', setState: setLaser4On },
    ];

    // Use for loop for early exit on first collision detection
    for (let i = 0; i < laserData.length; i++) {
      const { lineId, laserId, setState } = laserData[i];
      const lineDiv = document.getElementById(lineId);
      const laserDiv = document.getElementById(laserId);

      // Check collision with both the line and the laser parts
      if ((lineDiv && checkCollision(lineDiv, barrierDiv)) ||
        (laserDiv && checkCollision(laserDiv, barrierDiv))) {

        setState(false); // Turn off the laser if it collides with my-div2
        stopLaserSound(laserId)
        break; // Exit the loop after turning off one laser
      }
    }
  };
  

  useEffect(() => {

    const collisionInterval = setInterval(checkCollisionWithLaser, 100);
    return () => clearInterval(collisionInterval);
  }, []);
  //Laser ON
  useEffect(() => {
    let isCancelled = false; // Flag to prevent activation after unmount or asset destruction
  
    const activateRandomLaser = () => {
      if (assetDestroyed || isCancelled || gameWin) {
        return; // Stop activating lasers
      }
      const randomDelay = Math.random() * (10000 - 1000) + 1000; // 1s to 4s delay
      const lasers = [
        { id: 'Laser1', setOn: setLaser1On },
        { id: 'Laser2', setOn: setLaser2On },
        { id: 'Laser3', setOn: setLaser3On },
        { id: 'Laser4', setOn: setLaser4On },
      ];
      const randomIndex = Math.floor(Math.random() * lasers.length);
      const { id, setOn } = lasers[randomIndex];
  
      setOn(true); // Activate the laser
      playLaserSound(id); // Play the sound
  
      setTimeout(() => {
        if (!isCancelled) {
          activateRandomLaser();
        }
      }, randomDelay);
    };
  
    activateRandomLaser();
  
    return () => {
      isCancelled = true; // Prevent further activations
    };
  }, [assetDestroyed,gameWin]); // Re-run only if assetDestroyed changes
  //Laser DAMAGE ---------------------------------------------------------------------------
  useEffect(() => {
    // Calculate the total number of lasers that are on
    const activeLasersCount = [laser1On, laser2On, laser3On, laser4On].filter(Boolean).length;

    if (activeLasersCount > 0 && !assetDestroyed) {
      const damageRate = 100; // More rapid damage
      // Increase damage based on the number of active lasers
      const baseDamageAmount = 0.5; // Base damage for one laser
      const damageAmount = baseDamageAmount * activeLasersCount; // Increase damage for each active laser

      const damageInterval = setInterval(() => {
        setDataAssetHealth(prevHealth => {
          const newHealth = prevHealth - damageAmount;
          if (newHealth <= 0) {
            stopLaserSound('Laser1');
            stopLaserSound('Laser2');
            stopLaserSound('Laser3');
            stopLaserSound('Laser4');
            clearInterval(damageInterval);
            const sound = new Audio(GameOverSound);
            sound.play();
            setAssetDestroyed(true);

            return 0;
          }
          return newHealth;
        });
      }, damageRate);

      return () => clearInterval(damageInterval);
    }
  }, [laser1On, laser2On, laser3On, laser4On, assetDestroyed]);

  //Laser Block -------------------------------------------------------------------
  function checkCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    console.log("Checking")

    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

   
  // Error handler function to suppress specific errors
function handleError(event) {
  const errorMessage = event.message || '';
  // Check for specific error message and prevent default handling if matched
  if (errorMessage.includes('The play() request was interrupted by call to pause()')) {
    event.preventDefault();
    console.log('Suppressed specific error: ', errorMessage);
  }
}

// Attach error handler to window object for catching error events
window.addEventListener('error', handleError);

function handleUnhandledRejection(event) {
  // Extract reason, supporting both direct values and error objects
  const reasonMessage = event.reason instanceof Error ? event.reason.message : event.reason;

  // Ensure reasonMessage is a string before calling includes()
  if (typeof reasonMessage === 'string' && reasonMessage.includes('The play() request was interrupted by a call to pause()')) {
    event.preventDefault();
    console.log('Suppressed specific unhandled rejection: ', reasonMessage);
  }
}


// Attach unhandled rejection handler to window object
window.addEventListener('unhandledrejection', handleUnhandledRejection);


//<DialogueBox dialogues={dialogues5} line 491
  return (
    <div>
      <h1>Survive...</h1>

      
      <Cursor />

      {assetDestroyed ? (
        <img src={Pop} alt="Destroyed Data Asset" style={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 'calc(50vh - 225px)',
          width: '450px',
        }} />
      ) : (
        <>
          <div style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 'calc(50vh + 225px)', // Adjusted for above the Data Asset
            width: '450px',
            height: '20px',
            backgroundColor: '#ddd',
          }}>
            <div style={{
              height: '100%',
              width: `${dataAssetHealth}%`,
              backgroundColor: dataAssetHealth > 20 ? 'green' : 'red',
            }}></div>
          </div>
          <img src={DataAsset} alt="Data Asset" style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 'calc(50vh - 225px)',
            width: '450px',
            zIndex: '1'
          }} />
        </>
      )}
      {!assetDestroyed && <>
        <div id='Line1' style={{
          position: 'fixed',
          left: '0px',
          bottom: 'calc(50vh )', // Adjust so it's right below the Data Asset
          height: laser1On ? '6px' : '2px',
          width: 'calc(50% - 50px)', // Span to the center of the viewport
          backgroundColor: laser1On ? 'red' : 'cyan',
          overflow: 'visible',
          border: laser1On ? '3px solid black' : 'none',
          zIndex: 1
        }}>
          {laser1On && <img id='Laser1' src={LaserHit} alt="Laser" style={{
            position: 'absolute',
            bottom: '-140px',
            height: 'auto',
            width: 'auto',
            right: '-100px', // Adjust to end at the center
            zIndex: 1
          }} />}
        </div>
        <div id='Line2' style={{
          position: 'fixed',
          right: '0px',
          bottom: 'calc(50vh )', // Align with the Data Asset
          height: laser2On ? '6px' : '2px',
          width: 'calc(50% - 40px)', // Span from the right to the center
          backgroundColor: laser2On ? 'red' : 'cyan',
          overflow: 'visible',
          border: laser2On ? '3px solid black' : 'none',
          zIndex: '2'
        }}>
          {laser2On && <img id='Laser2' src={LaserHit} alt="Laser" style={{
            position: 'absolute',
            bottom: '-140px',
            height: 'auto',
            width: 'auto',
            left: '-100px', // Position it at the end of Line2, starting from the right
            transform: 'scaleX(-1)', // Flip the image horizontally
            zIndex: '2'
          }} />}
        </div>
        <div id='Line3' style={{
          position: 'fixed',
          top: '0px',
          left: '50%',
          width: laser3On ? '6px' : '2px',
          height: 'calc(50% - 225px)',// Span from the top to the center
          backgroundColor: laser3On ? 'red' : 'cyan',
          overflow: 'visible',
          border: laser3On ? '3px solid black' : 'none',
          zIndex: '2'
        }}>
          {laser3On && <img id='Laser3' src={LaserHit} alt="Laser" style={{
            position: 'absolute',
            top: '125px',
            left: '-102px', // Adjust based on the Data Asset's position
            height: 'auto',
            width: 'auto',
            transform: 'rotate(90deg)', // Rotate to simulate coming from the top
            zIndex: '2'
          }} />}
        </div>
        <div id='Line4' style={{
          position: 'fixed',
          bottom: '0px',
          left: '50%',
          width: laser4On ? '6px' : '2px',
          height: 'calc(50% + 55px)',// Span from the top to the center
          backgroundColor: laser4On ? 'red' : 'cyan',
          overflow: 'visible',
          border: laser4On ? '3px solid black' : 'none',
          zIndex: '0'
        }}>
          {laser4On && <img id='Laser4' src={LaserHit} alt="Laser" style={{
            position: 'absolute',
            bottom: '425px',
            left: '-92px', // Adjust based on the Data Asset's position

            height: 'auto',
            width: 'auto',
            transform: 'rotate(-90deg)', // Rotate to simulate coming from the bottom
            zIndex: '0'
          }} />}
        </div>
      </>}

      <div style={{
        position: 'fixed',
        top: '50px', // Adjust this value as needed
        right: '100px', // Adjust this value as wwwwwwneeded
        minHeight: '50px',
        display: 'inline-block'
      }}>

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
              <div id='randy-2' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
                <img src={ransomware} alt="Ransomware" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div id="randy-health-bar-2" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>






      <div style={{
        position: 'fixed',
        top: '50px', // Adjust this value as needed
        left: '100px', // Adjust this value as needed
        minHeight: '50px',
        display: 'inline-block'
      }}>

        <div id='folder-2' style={{ position: 'relative', display: 'inline-block', minHeight: '50px' }}>
          {scanProgress2 < 100 ? (
            <>
              <img src={FolderIcon} alt="Folder Icon" />
              {isHovering2 && (
                <>
                  <img src={ScanCircGif} alt="Scanning" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                  <div style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                    <div style={{ width: `${scanProgress2}%`, height: '100%', backgroundColor: 'rgba(1,79,98,255)' }}></div>
                  </div>
                </>
              )}
            </>
          ) : showRansomware2 ? (
            <>
              <div id='randy-3' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
                <img src={trojan} alt="Ransomware" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div id="randy-health-bar-3" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>


      <div style={{
        position: 'fixed',
        bottom: '100px', // Adjust this value as needed
        left: '100px', // Adjust this value as needed
        minHeight: '50px',
        display: 'inline-block'
      }}>

        <div id='folder-3' style={{ position: 'relative', display: 'inline-block', minHeight: '50px' }}>
          {scanProgress3 < 100 ? (
            <>
              <img src={FolderIcon} alt="Folder Icon" />
              {isHovering3 && (
                <>
                  <img src={ScanCircGif} alt="Scanning" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                  <div style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                    <div style={{ width: `${scanProgress3}%`, height: '100%', backgroundColor: 'rgba(1,79,98,255)' }}></div>
                  </div>
                </>
              )}
            </>
          ) : showRansomware3 ? (
            <>
              <div id='digi-7' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
                <img src={DigiVirus} alt="Ransomware" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div id="randy-health-bar-7" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>




      <div style={{
        position: 'fixed',
        bottom: '100px', // Adjust this value as needed
        right: '100px', // Adjust this value as needed
        minHeight: '50px',
        display: 'inline-block'
      }}>

        <div id='folder-4' style={{ position: 'relative', display: 'inline-block', minHeight: '50px' }}>
          {scanProgress4 < 100 ? (
            <>
              <img src={FolderIcon} alt="Folder Icon" />
              {isHovering4 && (
                <>
                  <img src={ScanCircGif} alt="Scanning" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                  <div style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                    <div style={{ width: `${scanProgress4}%`, height: '100%', backgroundColor: 'rgba(1,79,98,255)' }}></div>
                  </div>
                </>
              )}
            </>
          ) : showRansomware4 ? (
            <>
              <div id='digi-8' style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid red' }}>
                <img src={DigiVirus} alt="Ransomware" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div id="randy-health-bar-5" style={{ position: 'absolute', bottom: '-29px', left: 0, width: '100%', height: '5px', backgroundColor: 'grey', zIndex: 9999 }}>
                  <div style={{ width: `100%`, height: '100%', backgroundColor: 'red' }}></div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {showPowerUp && (
        <div id="PowerUp" style={{
          position: 'fixed',
          right: '400px',
          bottom: '400px',
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







    </div>
  );
}



export default Slide5;
