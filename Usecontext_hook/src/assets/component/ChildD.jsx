import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

function ChildD() {
  // const user =useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>

      {/* {user.name} */}
      {theme}





    </div>
  )
}

export default ChildD