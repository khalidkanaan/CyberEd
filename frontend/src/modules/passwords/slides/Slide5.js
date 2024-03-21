import React, { useState } from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css';
import DialogueBox from '../../../components/DialogueBox'; // Import DialogueBox
import { dialogues5 } from '../assets/dialogues'; // Import dialogues5
import coolRobot from '../assets/img/coolRobot.gif'
import Slide4 from './Slide4'; // Import Slide4
import Slide6 from './Slide6';

function Slide5() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [checkbox4, setCheckbox4] = useState(false);
    const [checkbox5, setCheckbox5] = useState(false);
    const [checkbox6, setCheckbox6] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handlePasswordChange = (value) => {
        // Check password requirements
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasSymbol = /[!@#$%^&*()_+={}\[\]:;<>,.?~]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasAtLeast12Characters = value.length >= 12;
        const containsApril = value.toLowerCase().includes('april'); // Case-insensitive check
       
        setCheckbox1(hasUppercase);
        setCheckbox2(hasSymbol);
        setCheckbox3(hasDigit);
        setCheckbox4(hasLowercase);
        setCheckbox5(hasAtLeast12Characters);
        setCheckbox6(containsApril);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        handlePasswordChange(e.target.value); // Automatically check checkboxes when input changes
    };

    const evaluatePassword = () => {
        let score = 0;
    
        // Check password length
        if (inputValue.length >= 12) {
            score += 1;
        }

        if(/\\bapril\\b/i.test(inputValue)){
            score += 1;
        }
    
        // Check if uppercase letter is required
        if (checkbox1) {
            score += 1;
        }
    
        // Check if symbol is required
        if ( checkbox2) {
            score += 1;
        }
    
        // Check if digit is required
        if ( checkbox3) {
            score += 1;
        }
    
        // Check if lowercase letter is required
        if (checkbox4) {
            score += 1;
        }

        // Check if the input value contains the word "april"
        if (inputValue.toLowerCase().includes('april')) {
            score += 1;
        }
    
        // Change the color of the strength bar based on score
        const strengthBar = document.getElementById('bar');
        if (score === 6) {
            strengthBar.style.backgroundColor = 'green';
            // Set a delay before navigating to the next slide
            setTimeout(() => {
                navigateSlide(Slide6);
            }, 900);
            
        } else if (score >= 3) {
            strengthBar.style.backgroundColor = 'orange';
        } else {
            strengthBar.style.backgroundColor = 'red';
        }
    };
    
    return (
        <div className="password">
            <button className="slide-back-button" onClick={() => navigateSlide(Slide4)}>
                Slide Back
            </button>
            <DialogueBox dialogues={dialogues5} />
    
            <img id='robot2' src={coolRobot} className="robot image" alt="chill robot" style={{ display: 'none' }} />
    
            <form style={{ display: 'none' }} className="form-container" id='form' onSubmit={(e) => { e.preventDefault(); evaluatePassword(); }}>
                <fieldset>
                    <legend>Password Policy</legend>
                    <label>
                        <input type="checkbox" id='checkbox5' checked={checkbox5} className='styled-checkbox'/>
                        Minimum password length: 12 characters
                    </label><br />
    
                    <label>
                        <input type="checkbox" id='checkbox1' checked={checkbox1} className='styled-checkbox'/>
                        Must include at least 1 uppercase letter
                    </label><br />
    
                    <label>
                        <input type="checkbox" id='checkbox2' checked={checkbox4} className='styled-checkbox'/>
                        Must include at least 1 lowercase letter
                    </label><br />
    
                    <label>
                        <input type="checkbox" id='checkbox3' checked={checkbox2} className='styled-checkbox'/>
                        Must include at least 1 symbol
                    </label><br />
    
                    <label>
                        <input type="checkbox" id='checkbox4' checked={checkbox3}  className='styled-checkbox' />
                        Must include at least 1 digit
                    </label><br />
    
                    <label>
                        <input type="checkbox" id='checkbox6' checked={checkbox6} className='styled-checkbox' />
                        Contains the word 'april'
                    </label><br />
    
                    <div style={{ display: 'flex', justifyContent:'center'  }}>
                        <textarea
                            placeholder="Enter Password here"
                            id='textarea5'
                            value={inputValue}
                            onChange={handleInputChange}
                            style={{width: '350px'}}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
    
            <br></br>
            
            <div className='strength-bar' id='bar' style={{ display: 'none' }}> Strength</div>
    
        </div>
    );
    
}

export default Slide5;
