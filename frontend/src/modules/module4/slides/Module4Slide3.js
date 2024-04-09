import React, { useState, useEffect, useRef } from 'react';
import DialogueBox from '../../../components/DialogueBox.js';
import { dialogues3 } from '../assets/Module4Dialogues.js';
import Cursor from '../components/CustomCursorComponent.js';
import LaserSound from '../assets/img/cursor/HackingSound.mp3'; 
import Pop from '../assets/img/cursor/FlashW1.gif'; 


import GameOverSound from '../assets/img/cursor/MarioGameOver.mp3'; 

import DataAsset from '../assets/img/cursor/DATA3.gif';
import LaserHit from '../assets/img/cursor/LaserHit.gif';
function Slide3() {
  const [laser1On, setLaser1On] = useState(false);
  const [assetDestroyed, setAssetDestroyed] = useState(false);
  const [dataAssetHealth, setDataAssetHealth] = useState(100);


  //LASER----
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
    let activationCount = 0; // Counter for the number of activations
  
    // Function to activate the laser
    const activateRandomLaser = () => {
      if (assetDestroyed || isCancelled || activationCount >= 3) {
        return; // Stop activating lasers after 3 activations or if cancelled/destroyed
      }
      const lasers = [
        { id: 'Laser1', setOn: setLaser1On },
        // Add other lasers here if needed
      ];
      const randomIndex = Math.floor(Math.random() * lasers.length);
      const { id, setOn } = lasers[randomIndex];
  
      setOn(true); // Activate the laser
      playLaserSound(id); // Play the sound
      activationCount++; // Increment the activation counter
  
      if (activationCount < 3) {
        const randomDelay = Math.random() * (5000 - 1000) + 1000; // 1s to 5s delay
        setTimeout(() => {
          if (!isCancelled) {
            activateRandomLaser(); // Continue activating lasers at random intervals
          }
        }, randomDelay);
      }
    };
  
    // Start the activation process after 20 seconds
    const initialTimeoutId = setTimeout(activateRandomLaser, 20000); // 20s initial delay
  
    return () => {
      isCancelled = true; // Set the cancellation flag
      clearTimeout(initialTimeoutId); // Clear the initial timeout if the component unmounts before it fires
    };
  }, [assetDestroyed, setLaser1On]); // Add dependencies as needed
  
  
    
  
   //Laser DAMAGE ---------------------------------------------------------------------------
   useEffect(() => {
     // Calculate the total number of lasers that are on
     const activeLasersCount = [laser1On].filter(Boolean).length;
 
     if (activeLasersCount > 0 && !assetDestroyed) {
       const damageRate = 100; // More rapid damage
       // Increase damage based on the number of active lasers
       const baseDamageAmount = 0.1; // Base damage for one laser
       const damageAmount = baseDamageAmount * activeLasersCount; // Increase damage for each active laser
 
       const damageInterval = setInterval(() => {
         setDataAssetHealth(prevHealth => {
           const newHealth = prevHealth - damageAmount;
           if (newHealth <= 0) {
             stopLaserSound('Laser1');
    
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
   }, [laser1On, assetDestroyed]);
 
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

  //------------











  return (
    <div>
      <h1>AVIE FIREWALL TUTORIAL</h1>
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
      {!assetDestroyed && (
        <div id='Line1' style={{
          position: 'fixed',
          left: '0px',
          bottom: 'calc(50vh)', // Adjust so it's right below the Data Asset
          height: laser1On ? '6px' : '2px',
          width: 'calc(50% - 225px)', // Adjust to start from the edge to the center of the Data Asset
          backgroundColor: laser1On ? 'red' : 'cyan',
          overflow: 'visible',
          border: laser1On ? '3px solid black' : 'none',
          zIndex: '1'
        }}>
          {laser1On && <img id='Laser1' src={LaserHit} alt="Laser" style={{
            position: 'absolute',
            bottom: '-140px',
            right: '-100px', // Adjust if necessary to align with the scenario
            zIndex: '2' // Ensure the laser image is above other elements
          }} />}
        </div>
      )}
  
      <DialogueBox dialogues={dialogues3} />
      <Cursor />
    </div>
  );
  

        }
export default Slide3;
