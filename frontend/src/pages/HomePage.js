import React from 'react';
import BasePage from './BasePage';
import ScrollingBackground from '../components/ScrollingBackground';
import '../assets/css/homepage.css'
import '../assets/css/fonts.css';


class HomePage extends React.Component {
  render() {
    return (
      <BasePage>
      <ScrollingBackground>
 <div className="wrapper">
 <h1 className="ps2p text-L2" >Welcome to the Home Page! </h1>  

        <div className="container">
          {/* Card 1 */}
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>MODULE1</h4>
                <p>MODULE 1 description</p>
              </div>
            </div>
          </label>

          {/* Card 2 */}
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Module 2</h4>
                <p>module 2 blabhabhad</p>
              </div>
            </div>
          </label>

          {/* Card 3 */}
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>module 3 </h4>
                <p>gskghjdfshgjkldfs</p>
              </div>
            </div>
          </label>

          {/* Card 4 */}
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>Module four</h4>
                <p>modulfe 4 info</p>
              </div>
            </div>
          </label>

          
        </div>
      </div>
    
 
 
 
 
 </ScrollingBackground>

 </BasePage>
    );
  }
}

export default HomePage;
