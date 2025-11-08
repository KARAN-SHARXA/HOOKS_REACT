import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

//first -> side effect function
//secod -> clean up function
// third-> comma sepratde dep list


// variation:1 
// run on every render





function App() {

  const [count,setCount]=useState(null);


  function handelClik(){
    setCount(count+1)
  }

  // variation 1
  // useEffect(() => {
    
  //  alert("I Will run on each render")
  // })


  // variation 2 run only in first render

  // useEffect(()=>{
  //   alert("i will run in first render")
  // },[])


  // variaton 3

  // useEffect(()=>{
  //   alert("i will run on every r")
  // },[count])

  

  useEffect(()=>{
    alert("hi");
    return()=>{
      alert("by")
    }
  },[count])
  return (
    <div>App
      <button onClick={handelClik} >click me</button>
      count: {count}
    </div>
  )
}

export default App