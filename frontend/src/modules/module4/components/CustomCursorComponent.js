import React, { useState, useEffect } from 'react';
import '../assets/css/module4.css';
import CursorUp from '../assets/img/cursor/up.gif';
import CursorDown from '../assets/img/cursor/down.gif';
import CursorLeft from '../assets/img/cursor/left.gif';
import CursorRight from '../assets/img/cursor/right.gif';
import CursorUpLeft from '../assets/img/cursor/upleft.gif';
import CursorUpRight from '../assets/img/cursor/upright.gif';
import CursorDownLeft from '../assets/img/cursor/downleft.gif';
import CursorDownRight from '../assets/img/cursor/downright.gif';
import CursorDefault from '../assets/img/cursor/up.gif';
import Barrier from '../assets/img/cursor/BARRIER2.gif';
import Sword from '../assets/img/cursor/SWORD1.gif';
import Fire from '../assets/img/cursor/Fire55.gif';
import BeamShot from '../assets/img/cursor/BeamShot.gif';
import Pop from '../assets/img/cursor/FlashW.gif';
import { useCursorContext } from './CursorContext'; // adjust the import path as necessary
import SwordIcon from '../assets/img/cursor/swordicon.gif';
import BarrierIcon from '../assets/img/cursor/barrier.gif';
import SwordSound from '../assets/img/cursor/HaloSword.mp3';
import BarrierSound from '../assets/img/cursor/BarrierSound.mp3';
import HitSound from '../assets/img/cursor/HitSound.mp3';
import powerUpSound from '../assets/img/cursor/MarioPowerUp.mp3';
import DigiVirusDamage from '../assets/img/cursor/DigiVirusDamage3.gif';
import DigiVirus from '../assets/img/cursor/DigiVirus.gif';
const CustomCursorComponent = () => {   
    const [randyHealths, setRandyHealths] = useState({
        'randy-1': 100,
        'randy-2': 100,
        'randy-3': 100,
        'randy-4': 100,
        'randy-5': 100,
        'digi-6' : 100,
        'digi-7' : 100,
        'digi-8' : 100,


      });

    
          
    const [swordCooldownTime, setSwordCooldownTime] = useState(0);


    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
    const [cursorIcon, setCursorIcon] = useState(CursorDefault);
    const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
    const [labelVisible, setLabelVisible] = useState(false);
    const [labelText, setLabelText] = useState("Cursor Info");
    const [randysRemoved, setRandysRemoved] = useState(0);

    
    const [isBarrierVisible, setIsBarrierVisible] = useState(false);

    const [barrierCooldownTime, setBarrierCooldownTime] = useState(0);
    const [isBarrierCooldown, setIsBarrierCooldown] = useState(false);
    const barrierAnimationDuration = 1600; // Adjust based on your barrier ability's duration


    const [isSwordVisible, setIsSwordVisible] = useState(false);
    const [isSwordCooldown, setIsSwordCooldown] = useState(false);
    const [isPowerCooldown, setIsPowerCooldown] = useState(false);


    const [isPoweredUp, setIsPoweredUp] = useState(false);

    const [powerUpApplied, setPowerUpApplied] = useState(false);

    
    

    const swordAnimationDuration  = 950;
    console.log('isPoweredUp:', isPoweredUp);

     // Toggle function for Abilities
     const activateBarrier = () => {
    // Check if the barrier is currently on cooldown
    if (!isBarrierCooldown) {
        const audio = new Audio(BarrierSound);
        audio.play(); // Play the sword sound
        setIsBarrierVisible(true); // Make the barrier visible to start the animation
        setIsBarrierCooldown(true); // Indicate that the barrier is on cooldown
        setBarrierCooldownTime(barrierAnimationDuration); // Initialize the cooldown timer

        // Decrease the cooldown time at a set interval
        const countdown = setInterval(() => {
            setBarrierCooldownTime((prevTime) => {
                const updatedTime = prevTime - 100;
                // Once the countdown reaches 0, clear the interval and reset the cooldown time
                if (updatedTime <= 0) {
                    clearInterval(countdown);
                    return 0;
                }
                return updatedTime;
            });
        }, 100);

        // After the barrier animation duration, hide the barrier
        setTimeout(() => {
            setIsBarrierVisible(false);
        }, barrierAnimationDuration);

        // After the cooldown duration, reset the cooldown state to allow reactivation
        setTimeout(() => {
            setIsBarrierCooldown(false); // This line allows the barrier to be used again
            setBarrierCooldownTime(0); // Reset the cooldown time
        }, barrierAnimationDuration);
    }
};
    
    
     const activateSword = () => {
        if (!isSwordCooldown) {
            const audio = new Audio(SwordSound);
            audio.play(); // Play the sword sound
    
            setIsSwordVisible(true); // Make the sword visible to start the animation
            setIsSwordCooldown(true); // Start the cooldown
            setSwordCooldownTime(swordAnimationDuration); // Set the cooldown time
    
            // Immediately start decreasing the cooldown time to update the visual bar
            const countdown = setInterval(() => {
                setSwordCooldownTime((prevTime) => {
                    const updatedTime = prevTime - 100;
                    if (updatedTime <= 0) {
                        clearInterval(countdown); // Stop the countdown when time is up
                        return 0; // Ensure the time doesn't go negative
                    }
                    return updatedTime;
                });
            }, 100);
    
            // Use setTimeout to manage the visibility duration of the sword
            setTimeout(() => {
                setIsSwordVisible(false); // Hide the sword after the animation
            }, swordAnimationDuration);
    
            // Additionally, manage the cooldown period separately
            setTimeout(() => {
                setIsSwordCooldown(false); // Allow the sword to be used again
                setSwordCooldownTime(0); // Reset the cooldown time
            }, swordAnimationDuration);
        }
    };

    const activatePowerUp = () => {
        // Check if the barrier is currently on cooldown
        if (!isPowerCooldown) {
            const audio = new Audio(powerUpSound);
            audio.play(); // Play the sword sound
            setIsPoweredUp(true); // Make the barrier visible to start the animation
            setIsPowerCooldown(true); // Indicate that the barrier is on cooldown
            setIsPowerCooldown(100000000); // Initialize the cooldown timer
            const powerUpDiv = document.getElementById('PowerUp');
            if (powerUpDiv) {
                powerUpDiv.remove(); // Safely remove the div if it exists
            }
            // Decrease the cooldown time at a set interval
            const countdown = setInterval(() => {
                setIsPowerCooldown((prevTime) => {
                    const updatedTime = prevTime - 100;
                    // Once the countdown reaches 0, clear the interval and reset the cooldown time
                    if (updatedTime <= 0) {
                        clearInterval(countdown);
                        return 0;
                    }
                    return updatedTime;
                });
            }, 100);
    
            // After the barrier animation duration, hide the barrier
            setTimeout(() => {
                setIsPoweredUp(false);
            }, 100000000);
    
            // After the cooldown duration, reset the cooldown state to allow reactivation
            setTimeout(() => {
                setIsPoweredUp(false); // This line allows the barrier to be used again
                setIsPowerCooldown(0); // Reset the cooldown time
            }, 100000000);
        }
    };
        
    
    
    
    const debounce = (func, delay) => {
        let debounceTimer;
        return function (...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => { func.apply(this, args); }, delay);
        };
    };

    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            return true;
        } catch (e) {
            return false;
        }
    };



    let movementTimeout;
    const movementThreshold = 5; // You can adjust this value

    const determineDirection = (x, y) => {
        const deltaX = x - prevPosition.x;
        const deltaY = y - prevPosition.y;

        if (Math.abs(deltaX) < movementThreshold && Math.abs(deltaY) < movementThreshold) {
            return; // Skip if movement is too small
        }
        clearTimeout(movementTimeout);

        // Calculate the angle of the movement
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

        if (angle > -22.5 && angle <= 22.5) {
            setCursorIcon(CursorRight);
        } else if (angle > 22.5 && angle <= 67.5) {
            setCursorIcon(CursorDownRight);
        } else if (angle > 67.5 && angle <= 112.5) {
            setCursorIcon(CursorDown);
        } else if (angle > 112.5 && angle <= 157.5) {
            setCursorIcon(CursorDownLeft);
        } else if (angle > 157.5 || angle <= -157.5) {
            setCursorIcon(CursorLeft);
        } else if (angle > -157.5 && angle <= -112.5) {
            setCursorIcon(CursorUpLeft);
        } else if (angle > -112.5 && angle <= -67.5) {
            setCursorIcon(CursorUp);
        } else if (angle > -67.5 && angle <= -22.5) {
            setCursorIcon(CursorUpRight);
        } else {
            setCursorIcon(CursorDefault);
        }

        movementTimeout = setTimeout(() => {
            setCursorIcon(CursorDefault);
        }, 120); // Delay for resetting to default cursor

        setPrevPosition({ x, y });
    };


    const moveDiv = (e) => {
        requestAnimationFrame(() => {
            let x, y;
            if (!isTouchDevice()) {
                x = e.pageX;
                y = e.pageY;
            } else if (e.touches) {
                x = e.touches[0].pageX;
                y = e.touches[0].pageY;
            }
    
            setPosition({ x: x - 160, y: y - 160 });
            determineDirection(x, y);
    
            // Assuming moduleDiv is the div you want the label to be relative to
            const moduleDivRect = document.querySelector('.module-window').getBoundingClientRect();
            // Adjust these values to position the label within the div, considering div's dimensions
            const labelX = Math.min(x, moduleDivRect.right - 50); // Adjust 50 to the size of your label if needed
            const labelY = moduleDivRect.top + 10; // You might adjust this based on your label size
    
            setLabelPosition({ x: x-50 , y: y- 50 });
            setLabelVisible(true); // Show the label when moving
        });
    };
    




    useEffect(() => {
        document.addEventListener('mousemove', moveDiv);
        document.addEventListener('touchmove', moveDiv);

        const moduleDiv = document.querySelector('.module-window');
        moduleDiv.addEventListener('mousemove', moveDiv);
        moduleDiv.style.cursor = 'none';
        const handleKeyPress = (event) => {
            if (event.key === "W" || event.key === "w") {
                activateBarrier();
            
             } else if (event.key === "Q" || event.key === "q") { // Toggle Sword visibility
                activateSword();
            }
            else if (event.key === "E" || event.key === "e") {
            }
        }
        

        // Add keydown event listener
        document.addEventListener('keydown', handleKeyPress);
        
        const checkForCollisionWithPowerUp = () => {
            
            const myDiv = document.getElementById('my-div'); // Assuming 'my-div' is the cursor
            const powerUpDiv = document.getElementById('PowerUp');

            if (myDiv && powerUpDiv && checkCollision(myDiv, powerUpDiv)) {
                activatePowerUp(); // Activate power-up upon collision

            }

        };
        
        
        

        let collisionIntervalPU;
        if (!isPoweredUp) { // Only set up the collision check if the power-up hasn't been activated
            collisionIntervalPU = setInterval(checkForCollisionWithPowerUp, 200);
        }


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


       const checkForCollisionWithRandys = () => {
    if (!isSwordVisible) return; // Exit if sword is not visible or not powered up

    const swordDiv = document.getElementById('my-div3');
    if (!swordDiv) return; // Early exit if sword div doesn't exist

    Object.keys(randyHealths).forEach(randyId => {
        const randy = document.getElementById(randyId);
        if (randy && checkCollision(swordDiv, randy) && !randy.dataset.hit) {
            if (randyId.includes('digi') && !isPoweredUp) return;

            const audio = new Audio(HitSound);
            audio.play(); // Play the hit sound

            // Update health state for the hit Randy
            setRandyHealths(prevHealths => {
                const newHealths = { ...prevHealths };
                const damageAmount = isPoweredUp ? 15 : 3; // Special damage for 'powperup'
                const newHealth = newHealths[randyId] - damageAmount;
                newHealths[randyId] = newHealth;

                updateRandyHealthBar(newHealth, randyId);

                if (newHealth <= 0) {
                    handleRandyDefeat(randy, randyId);
                }

                return newHealths;
            });
        }
    });
};

const updateRandyHealthBar = (health, randyId) => {
    const healthBarId = `randy-health-bar-${randyId.split('-')[1]}`; // Adjust pattern if needed
    const healthBar = document.getElementById(healthBarId);
    const randy = document.getElementById(randyId);

    
    if (randyId.includes('digi')) {
        if (healthBar) {
            healthBar.style.width = `${health}%`;
            if (health <= 0) {
                healthBar.style.backgroundColor = 'gray';
            }
        }
        console.log(randyId)
        const randyImage = randy.querySelector('img');
        if (randyImage) {
            randyImage.src = DigiVirusDamage; // Switch to the damage image
            
            setTimeout(() => {
                randyImage.src = DigiVirus; // Switch back after 1 second
            }, 4000);
        }
    }

    else{

        if (healthBar) {
            healthBar.style.width = `${health}%`;
            if (health <= 0) {
                healthBar.style.backgroundColor = 'gray';
            }
        }
    }
};

function handleRandyDefeat(randy, randyId) {
    const randyImg = randy.querySelector('img');
    if (randyImg) {
        randyImg.src = Pop; // Example of defeat animation
        randy.dataset.hit = "true";
        setRandysRemoved(prev => prev + 1);

        setTimeout(() => {
            randy.remove();
        }, 950); // Example timeout before removal
    }
}

        
        
        
        
        

        
        

    const collisionInterval = setInterval(checkForCollisionWithRandys, 100); // 
        return () => {
            clearInterval(collisionInterval); // Cleanup on unmount
            clearInterval(collisionIntervalPU); // Cleanup on unmount

            document.removeEventListener('mousemove', moveDiv);
            document.removeEventListener('touchmove', moveDiv);
            document.removeEventListener('keydown', handleKeyPress);

        };
    }, [prevPosition,isSwordVisible,isPoweredUp]);


    return (
        <>
            <div
                id="my-div"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    position: 'absolute'
                }}
            >
                <img src={cursorIcon} alt="icon" />
            </div>
            {isBarrierVisible && (
                <div
                    id="my-div2"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        position: 'absolute',
                    }}
                >
                    <img src={Barrier} alt="Barrier" />
                </div>
            )}
{isSwordVisible && (
  <div
    id="my-div3"
    style={{
      left: isPoweredUp ? `calc(${position.x}px - 300px)` : `${position.x}px`,
      top: `${position.y}px`,
      position: 'absolute'
    }}
  >
    <img src={isPoweredUp ? BeamShot : Sword} alt={isPoweredUp ? "Beam Shot" : "Sword"} />
  </div>
)}
             {isPoweredUp && (
                console.log('rendering'),
                <div
                    id="my-div4"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        position: 'absolute',
                    }}
                >
                    <img src={Fire} alt="Fire" />
                </div>
            )}
            {labelVisible && (
                <div
                    style={{
                        position: 'fixed',
                        left: `${labelPosition.x}px`,
                        top: `${labelPosition.y}px`,
                        zIndex: 99999,
                        color: 'white',
                        minWidth: '0px',
                        padding: '10px', // Added for better visibility
                    }}
                >
                    {/* Adjusted to display cooldown for both sword and barrier */}
                    {isSwordCooldown ? `Q CD: ${swordCooldownTime}ms` : ''}
                    {isBarrierCooldown ? `W CD: ${barrierCooldownTime}ms` : ''}
                    {!isSwordCooldown && !isBarrierCooldown ? `Files cleared: ${randysRemoved}` : ''}
                </div>
            )}
            {/* HUD for abilities */}
            <div style={{
                position: 'fixed',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100px',
            }}>
                {/* Sword Icon */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100px',
                }}>
                    <img src={SwordIcon} alt="Sword" style={{ 
                        width: '100%', 
                        height: 'auto', 
                        filter: isSwordCooldown ? 'brightness(50%)' : 'none', 
                        border: isSwordCooldown ? '3px solid red' : '4px solid green'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: `${(swordCooldownTime / swordAnimationDuration) * 100}%`,
                        height: '5px',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                    }}></div>
                </div>
    
                {/* Barrier Icon */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100px',
                }}>
                    <img src={BarrierIcon} alt="Barrier" style={{ 
                        width: '100%', 
                        height: 'auto', 
                        filter: isBarrierCooldown ? 'brightness(50%)' : 'none', 
                        border: isBarrierCooldown ? '3px solid red' : '4px solid green'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: `${(barrierCooldownTime / barrierAnimationDuration) * 100}%`,
                        height: '5px',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                    }}></div>
                </div>
            </div>
        </>
    );
    
};

export default CustomCursorComponent;
