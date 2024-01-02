import Cookies from 'js-cookie';
import { createBrowserHistory } from 'history';

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

export function toggleElements(ids, shouldShow = true) {
  var delay = 0; // Initial delay
  var animationDuration = 500;

  // Reverse the array if shouldShow is false
  var elementsToToggle = shouldShow ? ids : [...ids].reverse();

  elementsToToggle.forEach(function(id) {
    setTimeout(function() {
      var element = document.getElementById(id);
      if (element) {
        element.style.transition = `opacity ${animationDuration / 1000}s ease-in`;

        if (shouldShow) {
          animateElement(element, 0, 1, '', animationDuration);
        } else {
          animateElement(element, 1, 0, '', animationDuration);
        }
      }
    }, delay);

    delay += animationDuration; // Increase delay for next element
  });
}
