import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
    position: { x: 0, y: 0 },
    isSwordVisible: false,
    activateSword: () => {},
    updateCursorPosition: () => {}
  });
  
export const CursorProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSwordVisible, setIsSwordVisible] = useState(false);

  const updateCursorPosition = (x, y) => {
    setPosition({ x, y });
  };

  const activateSword = () => {
    
      setIsSwordVisible(true);
     
  };
  console.log(isSwordVisible); // Add this inside your CustomCursorComponent

  // Make sure to include all the states and functions you want to expose
  return (
    <CursorContext.Provider value={{
      position,
      isSwordVisible,
      activateSword,
      updateCursorPosition
    }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => useContext(CursorContext);
