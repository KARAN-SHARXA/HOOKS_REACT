import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import A from './assets/Component/A';


const ThemeContext=createContext();
function App() {
  const [theme,setTheme]=useState('light');
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container'>
          <A></A>
        </div>
        
        
      </ThemeContext.Provider>

    </div>
  )
}

export default App
export {ThemeContext}

