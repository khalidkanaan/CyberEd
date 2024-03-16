import React, { useState, useRef, useContext, createContext, useEffect } from 'react';
import styles from '../assets/css/phone.module.css';

// Create a context for the keyboards
export const PhoneContext = createContext();

// Create a provider component that holds the shared state
export const PhoneProvider = ({ children, conversation = [] }) => {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef(null);

  const addMessage = (id, message) => {
    setIsTyping(true);
    setMessages((prev) => [...prev, { id, message }]);
  };

  useEffect(() => {
    if (!isTyping && conversation.length > 0) {
      intervalRef.current = setInterval(() => {
        setMessages((prev) => [...prev, conversation[index]]);
        setIndex((prevIndex) => (prevIndex + 1) % conversation.length);
      }, 2000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isTyping, index, conversation]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <PhoneContext.Provider value={{ messages, addMessage, setIsTyping }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const Phone = ({ id }) => {
  const [inputValue, setInputValue] = useState('');
  const [isUppercase, setIsUppercase] = useState(false);
  const deleteInterval = useRef(null);
  const deleteTimeout = useRef(null);
  const screenRef = useRef(null);
  const { messages, addMessage, setIsTyping } = useContext(PhoneContext);

  const handleKeyPress = (key) => {
    setInputValue((prev) => prev + (isUppercase ? key.toUpperCase() : key));
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleBackspaceDown = () => {
    handleBackspace();
    deleteTimeout.current = setTimeout(() => {
      deleteInterval.current = setInterval(handleBackspace, 100);
    }, 600);
  };

  const handleBackspaceUp = () => {
    clearTimeout(deleteTimeout.current);
    clearInterval(deleteInterval.current);
  };

  const handleShift = () => {
    setIsUppercase((prev) => !prev);
  };

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      addMessage(id, inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setIsTyping(true);
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    screenRef.current.scrollTop = screenRef.current.scrollHeight;
  }, [messages]);

  const rows = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ];

  return (
    <div className={styles.phone}>
      <div className={styles.screen} ref={screenRef}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${message.id === id ? styles.sent : styles.received}`}>
            {message.message}
          </div>
        ))}
      </div>
      <div className={styles.keyboard}>
        <div className={styles.inputRow}>
          <textarea value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button onClick={handleSend}>➤</button>
        </div>
        {rows.map((row, index) => (
          <div className={styles.keyRow} key={index}>
            {index === 2 && <button onClick={handleShift}>⇧</button>}
            {row.split('').map((key) => (
              <button onClick={() => handleKeyPress(key)} key={key}>
                {isUppercase ? key.toUpperCase() : key}
              </button>
            ))}
            {index === 2 && <button onMouseDown={handleBackspaceDown} onMouseUp={handleBackspaceUp}>⇦</button>}
          </div>
        ))}
        <div className={styles.keyRow}>
          <button onClick={() => handleKeyPress(' ')}>space</button>
          <button onClick={() => handleKeyPress('@')}>@</button>
          <button onClick={() => handleKeyPress('.')}>.</button>
          <button onClick={() => handleKeyPress('\n')}>return</button>
        </div>
      </div>
    </div>
  );
};
