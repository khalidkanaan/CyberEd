import React, {useState} from 'react';
import { navigateSlide, createDialogueBox, closeDialogueBox } from '../../../assets/js/helpers';
import DialogueBox from '../../../components/DialogueBox';
import { Activity, Ans11, Ans12, Ans21, Ans22, Ans31, Ans32 } from '../assets/js/dailogues'
import Slide4 from './Slide4';
import face from '../assets/img/Mailman-face.png'
import outside from '../assets/img/outside-intro.jpg'

import EM1 from '../assets/img/Emails/EM1.png'
import EM1adr from '../assets/img/Emails/EM1-adr.png'
import EM1cnt from '../assets/img/Emails/EM1-cnt.png'

import EM2 from '../assets/img/Emails/EM2.png'
import EM2adr from '../assets/img/Emails/EM2-adr.png'
import EM2cnt from '../assets/img/Emails/EM2-cnt.png'
import EM2lnk from '../assets/img/Emails/EM2-lnk.png'

import EM3 from '../assets/img/Emails/EM3.png'
import EM3adr from '../assets/img/Emails/EM3-adr.png'
import EM3cnt from '../assets/img/Emails/EM3-cnt.png'
import EM3lnk from '../assets/img/Emails/EM3-lnk.png'



const ImageCarousel = ({ cid, images, dial1, dial2 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
  
    const handleNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };
  
    const handleAccept = () => {
      setButtonsDisabled(true);
      closeDialogueBox();
      setTimeout(() => {
        createDialogueBox(dial1);  
      }, 650); 
    };
  
    const handleDecline = () => {
      setButtonsDisabled(true);
      closeDialogueBox();
      setTimeout(() => {
        createDialogueBox(dial2);  
      }, 650); 
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
    { src: EM2, alt: "Image 1", style: {width:'650px', height:'350px'} },
    { src: EM2adr, alt: "Image 2",  style: {width:'800px', marginTop:'7%'} },
    { src: EM2cnt, alt: "Image 2", style: {width:'700px', height:'350px'} },
    { src: EM2lnk, alt: "Image 2",  style: {width:'800px', marginTop:'7%'} },
  ];

  const carouselImages3 = [ 
    { src: EM3, alt: "Image 1", style: {width:'650px', height:'350px'} },
    { src: EM3adr, alt: "Image 2",  style: {width:'800px', marginTop:'7%'} },
    { src: EM3cnt, alt: "Image 2", style: {width:'700px', height:'350px'} },
    { src: EM3lnk, alt: "Image 2",  style: {width:'800px', marginTop:'7%'} },
  ];

  function Slide5() {

    return (
      <div>
        <button className='slide-back-button' onClick={() => navigateSlide(Slide4)}>Slide Back</button>
        <DialogueBox dialogues={Activity} />
        <div className='Email'>  
          <img id='outside' src={outside} className='bg1' alt="Warehouse outside" style={{display: "none"}} />
          <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />
          <ImageCarousel cid={'carousel'} images={carouselImages1} dial1={Ans11} dial2={Ans12} />
          <ImageCarousel cid={'carousel2'} images={carouselImages2} dial1={Ans21} dial2={Ans22} />
          <ImageCarousel cid={'carousel3'} images={carouselImages3} dial1={Ans31} dial2={Ans32} />
        </div>
      </div>
    );
  }
  
  export default Slide5;