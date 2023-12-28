import React from 'react';
import '../assets/css/BasePage.css'; // Import the CSS file containing the scrolling background style
import videoBg from '../assets/img/video2.mp4'
const ScrollingBackground = ({ children }) => {
  return (
    <div className="scrolling-background">
      <video src={videoBg} autoPlay loop muted/>
      <div className="centered-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollingBackground;