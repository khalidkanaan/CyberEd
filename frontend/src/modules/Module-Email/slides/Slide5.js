import React, {useState} from 'react';
import { navigateSlide, createDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { Activity, Ans1, Ans2 } from '../assets/js/dailogues'
import Slide4 from './Slide4';
import face from '../assets/img/Mailman-face.png'

import EM1 from '../assets/img/Emails/EM1.png'
import EM1adr from '../assets/img/Emails/EM1-adr.png'
import EM1cnt from '../assets/img/Emails/EM1-cnt.png'

import mailman from '../assets/img/Mailman-idle.png'
import mailmanSide from '../assets/img/Mailman-side-pkg.png'
import mailmanFront from '../assets/img/Mailman-front-pkg.png'

const ImageCarousel = ({ cid, images, dial1, dial2 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
  
    const handleNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };
  
    const handleAccept = () => {
      setButtonsDisabled(true);
      createDialogueBox(dial1);    
    };
  
    const handleDecline = () => {
      setButtonsDisabled(true);
      createDialogueBox(dial2); 
    };
  
    const renderIndicator = () => {
      return images.map((_, index) => (
        <div
          key={index}
          style={{
            height: '5px',
            width: '10%',
            backgroundColor: currentIndex === index ? 'white' : 'grey',
            margin: '2px 2px 20px',
            display: 'inline-block',
          }}
        ></div>
      ));
    };
  
    return (
      <div id = {cid} className="image-carousel" style={{display:"none"}}>
        <div className='carousel-content'>
          <div style={{ textAlign: 'center', margin: '5px 0' }}>
            {renderIndicator()}
          </div>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            onClick={handleNextImage}
            style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '500px', ...images[currentIndex].style }}
          />
        </div>
        <div>
          <button className='carousel-button' onClick={handleAccept} disabled={buttonsDisabled}>Accept</button>
          <button className='carousel-button' onClick={handleDecline} disabled={buttonsDisabled} style={{backgroundColor:'rgb(229, 45, 45)'}}>Decline</button>
        </div>
      </div>
    );
  };
  

  const carouselImages1 = [
    { src: EM1, alt: "Image 1", style: {width:'500px'} },
    { src: EM1adr, alt: "Image 2", style: {width:'800px', marginTop:'7%'} },
    { src: EM1cnt, alt: "Image 3", style: {width:'800px'} }, 
  ];
  
  const carouselImages2 = [ 
    { src: mailman, alt: "Image 1" },
    { src: mailmanSide, alt: "Image 2" },
    { src: mailmanFront, alt: "Image 2" },
    { src: mailman, alt: "Image 1" },
  ];

  function Slide5() {

    return (
      <div>
        <button className='slide-back-button' onClick={() => navigateSlide(Slide4)}>Slide Back</button>
        <DialogueBox dialogues={Activity} />
        <div className='Email'>  
          <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />
          <ImageCarousel cid={'carousel'} images={carouselImages1} dial1={Ans1} dial2={Ans2} />
          <ImageCarousel cid={'carousel2'} images={carouselImages2} dial1={Ans1} dial2={Ans2} />
        </div>
      </div>
    );
  }
  
  export default Slide5;