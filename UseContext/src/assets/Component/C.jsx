import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'

function C() {
  const {theme,setTheme} =useContext(ThemeContext)
  function handleclick(){
    if(theme==='light')
      setTheme('darks')
    else
      setTheme('light')

  }
  return (
    <div>
     <button onClick={handleclick} >
      change theme
     </button>
    </div>
  )
}

export default C