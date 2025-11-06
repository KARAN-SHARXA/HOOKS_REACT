import React, { use } from 'react'
import { createContext } from 'react'
import ChildA from './assets/component/ChildA';
import { useState } from 'react';


//step1  create Conetxt

// const UserContext =createContext();
// wrap all the child inside a provider
// step3 pass value
// step 4 consumer k andar jaake consume kr lo
const ThemeContext = createContext()
function App() {

  // const [user,setUser]=useState({name:"karan"})

  const [theme,setTheme] =useState('light')
  return (
    <div>
      {/* <UserContext.Provider value={user} >
        <ChildA></ChildA>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={theme}>
        <ChildA></ChildA>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default App
export {ThemeContext}
