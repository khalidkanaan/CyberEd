import React, { useState } from 'react';
import styles from '../assets/css/filltheblanks.module.css';

function FillTheBlanks({ questions, onCheckAnswers }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [checked, setChecked] = useState(false);
  
    const handleAnswerChange = (questionIndex, selectedOption) => {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: selectedOption
      });
    };
  
    const checkAnswers = () => {
      setChecked(true);
      if (onCheckAnswers) {
        onCheckAnswers(selectedAnswers);
      }
    };
  
    return (
      <div className={styles.container}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionContainer}>
            <div className={styles.question}>
              <p className={styles.questionText}>
                {question.text.replace('___________', selectedAnswers[index] ? `_${selectedAnswers[index].replace(/ /g, '_')}_` : '___________')}
              </p>
              <select onChange={(e) => handleAnswerChange(index, e.target.value)} className={styles.select}>
                <option value="">Select...</option>
                {question.options.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>
            {checked && (
              <div className={styles.answer}>
                {question.answer === selectedAnswers[index]
                  ? <span className={styles.correct}>✅ CORRECT!</span>
                  : <span className={styles.incorrect}>❌ Correct Answer: {question.answer}</span>}
              </div>
            )}
          </div>
        ))}
        <button onClick={checkAnswers} className={styles.button}>Check Answers</button>
      </div>
    );
  }
  
  export default FillTheBlanks;