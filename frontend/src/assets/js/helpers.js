import React from 'react';
import { createRoot } from 'react-dom/client';
import Cookies from 'js-cookie';
import { createBrowserHistory } from 'history';
import DialogueBox from '../../components/DialogueBox';

const history = createBrowserHistory(); 

export function isCookiePresent(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2;
}

export const handleLogout = () => {
  Cookies.remove('username');
  Cookies.remove('progress');
  Cookies.remove('TEST-AUTH');
  history.push('/'); 
  window.location.reload();
};

function animateElement(element, startOpacity, endOpacity, display, duration) {
  element.style.opacity = startOpacity;
  element.style.display = display;

  // Use requestAnimationFrame to ensure the initial styles are applied before changing opacity
  window.requestAnimationFrame(function() {
    window.requestAnimationFrame(function() {
      element.style.opacity = endOpacity;
    });
  });

  if (endOpacity === 0) {
    // Set display to 'none' after the opacity transition is completed
    setTimeout(function() {
      element.style.display = 'none';
    }, duration);
  }
}

var timeouts = [];

export function toggleElements(ids, shouldShow = true, reverseAnimation = false, duration = 500) {
  var delay = 0; // Initial delay
  var animationDuration = duration; // Initial animation duration
  var speedUpFactor = 0.9; // Decrease the duration by 10% each time

  // Clear any pending timeouts
  timeouts.forEach(clearTimeout);
  timeouts = [];

  // Reverse the array if reverseAnimation is true
  var elementsToToggle = shouldShow || !reverseAnimation ? ids : [...ids].reverse();

  // Return a promise that resolves after all animations have completed
  return new Promise((resolve) => {
    elementsToToggle.forEach(function(id, index) {
      var timeout = setTimeout(function() {
        var element = document.getElementById(id);
        if (element) {
          element.style.transition = `opacity ${animationDuration / 1000}s ease-in`;

          if (shouldShow) {
            element.style.display = '';
            animateElement(element, 0, 1, '', animationDuration);
          } else {
            if (reverseAnimation) {
              animateElement(element, 1, 0, '', animationDuration);
              setTimeout(() => { element.style.display = 'none'; }, animationDuration);
            } else {
              element.style.display = 'none';
            }
          }

          // If this is the last animation, resolve the promise
          if (index === elementsToToggle.length - 1) {
            setTimeout(resolve, animationDuration);
          }
        }
      }, delay);

      timeouts.push(timeout);

      if (shouldShow || reverseAnimation) {
        delay += animationDuration; // Increase delay for next element
        animationDuration *= speedUpFactor; // Decrease the duration for next element
      }
    });
  });
}

export function setOpacity(id, opacity) {
  return new Promise((resolve) => {
    var image = document.getElementById(id);
    image.style.opacity = opacity;
    image.style.display = 'block'; 
    resolve(); 
  });
}



export const navigateSlide = (slide) => {
  const slideContainer = document.querySelector('#slide');
  if (slideContainer) {
    const root = createRoot(slideContainer); // Create a root
    root.render(React.createElement(slide)); // Render the passed React component inside the div
  } else {
    console.log("Can't use navigateSlide, please add a <div> with id=\"slide\" in your main Module page")
  }
};

export const createDialogueBox = (dialogues) => {
  const slideDiv = document.querySelector('#slide > div:first-child'); // Find the first child div inside the div with id 'slide'
  const dialogueDiv = document.createElement('div'); // Create a new div for the DialogueBox
  slideDiv.appendChild(dialogueDiv); // Append the dialogueDiv to the slideDiv
  const root = createRoot(dialogueDiv);
  const dialogueBox = <DialogueBox dialogues={dialogues} />;
  root.render(dialogueBox);
};

export const closeDialogueBox = () => {
  const dialogueBox = document.querySelector('.dialogue-box');
  if (dialogueBox) {
    dialogueBox.classList.add('closing');
    setTimeout(() => {
      dialogueBox.remove();
    }, 500);
  }
};