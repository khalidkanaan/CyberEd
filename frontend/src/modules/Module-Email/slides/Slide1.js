import React from 'react';
import '../assets/css/styling.css'
import outside from '../assets/img/outside-intro.jpg'
import pkgs from '../assets/img/pkgs.jpg'
import DialogueBox from '../../../components/DialogueBox';
import { intro } from '../assets/js/dailogues'
import mailman from '../assets/img/Mailman-idle.png'
import face from '../assets/img/Mailman-face.png'
import mailmanSide from '../assets/img/Mailman-side-pkg.png'
import mailmanFront from '../assets/img/Mailman-front-pkg.png'
import sort from '../assets/img/sorting.gif'


function Slide1() {
  return (
    <div>
      <DialogueBox dialogues={intro}/>
      <div className='Email'>
        <img id='outside' src={outside} className='bg1' alt="Warehouse outside" style={{display: "none"}} />
        <img id='pkgs' src={pkgs} className='bg1' alt="Warehouse inside" style={{display: "none"}} />

        <img id='face' src={face} className='face image' alt="friendly mailman" style={{display: "none"}} />

        <img id='mailman' src={mailman} className='mailman image' alt="friendly mailman" style={{display: "none"}} />
        <img id='mailmanSide' src={mailmanSide} className='mailman Side image' alt="friendly mailman" style={{display: "none", width:'140px', top:'55%'}} />
        <img id='mailmanFront' src={mailmanFront} className='mailman Front image' alt="friendly mailman" style={{display: "none", width:'140px', top:'53%'}} />

        <div id='sorting-img-div' className='image-container sorting-image-container' style={{display: "none"}} >
          <img id='sorting' className='image' src={sort} alt="Packages sorting"  />
        </div>
      </div>
    </div>
  );
}

export default Slide1;
