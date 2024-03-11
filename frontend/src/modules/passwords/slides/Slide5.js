import React, { useState } from 'react';
import { navigateSlide } from '../../../assets/js/helpers';
import '../assets/css/Passwords.styling.css';
import DialogueBox from '../../../components/DialogueBox'; // Import DialogueBox
import { dialogues5 } from '../assets/dialogues'; // Import dialogues5
import robot from '../assets/img/robotChill.gif';
import coolRobot from '../assets/img/coolRobot.gif'
import Slide4 from './Slide4'; // Import Slide4

function Slide5() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [checkbox4, setCheckbox4] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [numberValue, setNumberValue] = useState(14);

    const handleCheckboxChange = (checkboxName) => {
        switch (checkboxName) {
            case 'checkbox1':
                setCheckbox1(!checkbox1);
                break;
            case 'checkbox2':
                setCheckbox2(!checkbox2);
                break;
            case 'checkbox3':
                setCheckbox3(!checkbox3);
                break;
            case 'checkbox4':
                setCheckbox4(!checkbox4);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleNumberInputChange = (e) => {
        setNumberValue(e.target.value);
    };

    const evaluatePassword = () => {
        let score = 0;

        // Check password length
        if (inputValue.length >= 8 && inputValue.length <= 18) {
            score += 1;
        }

        // Check if uppercase letter is required
        if (checkbox1 && /[A-Z]/.test(inputValue)) {
            score += 1;
        }

        // Check if symbol is required
        if (checkbox2 && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(inputValue)) {
            score += 1;
        }

        // Check if digit is required
        if (checkbox3 && /\d/.test(inputValue)) {
            score += 1;
        }

        // Check if lowercase letter is required
        if (checkbox4 && /[a-z]/.test(inputValue)) {
            score += 1;
        }

        // Change the color of the strength bar based on score
        const strengthBar = document.getElementById('bar');
        if (score === 5) {
            strengthBar.style.backgroundColor = 'green';
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
            <img id='robot' src={robot} className='face' alt="friendly website robot" style={{ display: "none" }} />

            <form className="form-container" id='form' onSubmit={(e) => { e.preventDefault(); evaluatePassword(); }}>
                <fieldset>
                    <legend>Password Policy</legend>
                    <label>
                        Set Password Length:<input type="number" id='number5' value={numberValue} min="8" max="18" onChange={handleNumberInputChange} />
                    </label><br></br>

                    <label>
                        <input type="checkbox" id='checkbox5' checked={checkbox1} onChange={() => handleCheckboxChange('checkbox1')} />
                            Must include at least 1 uppercase letter 
                    </label><br></br>

                    <label>
                        <input type="checkbox" id='checkbox5' checked={checkbox4} onChange={() => handleCheckboxChange('checkbox4')} />
                        Must include at least 1 lowercase letter   
                    </label><br></br>

                    <label>
                        <input type="checkbox" id='checkbox5' checked={checkbox2} onChange={() => handleCheckboxChange('checkbox2')} />
                        Must include at least 1 symbol 
                    </label><br></br>

                    <label>
                        <input type="checkbox" id='checkbox5' checked={checkbox3} onChange={() => handleCheckboxChange('checkbox3')} />
                        Must include at least 1 digit
                    </label><br></br>

                    <button type="submit">Submit</button><br></br>
                    <textarea
                        placeholder="Enter Password here"
                        id='textarea5'
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{width: '400px'}}

                    /><br></br>
 
                </fieldset>
            </form>

            <br></br>
            <div className='strength-bar' id='bar'> Strength</div>

        </div>
    );
}

export default Slide5;
