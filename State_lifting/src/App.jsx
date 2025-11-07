import React, { useState } from 'react'
import Card from './Component/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga

  const[name,setName]=useState('');
  return (
   <Card name={name} setName={setName}></Card>
  )
}

export default App