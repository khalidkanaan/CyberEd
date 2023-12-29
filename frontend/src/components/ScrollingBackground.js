import React from 'react';
import '../assets/css/BasePage.css';
import videoBg from '../assets/img/video2.mp4'

const ScrollingBackground = ({ children }) => {
  return (
    <div className="scrolling-background">
      <video src={videoBg} autoPlay loop muted disablePictureInPicture/>
      <div className="centered-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollingBackground;