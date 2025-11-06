import React, { use, useEffect, useState } from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [total,settotal]=useState(0)

  //Firt -> side effect function
  //second ->clean-up function
  //third ->comma separated dep list

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])


  //variation one runs on every render
  useEffect(() => {
  alert("i will run on each render")
  
   
  }
)

// variation 2 on only first render

useEffect(() => {
  alert("I will run on only 1st render")
}, [])


// variation 3

useEffect(() => {
  alert(" i will run every time when count is updated")

}, [count])



// variation 4
useEffect(() => {
  alert("ramu tu ha shamu")
  

  
}, [count,total])


// variation clean up function

useEffect(()=>{
  alert("Count is updated")

  return ()=>{
    alert("count is unmounted from ui")

  }
},[count])






function handleClick(){
  setCount(count+1)
}

function handleclick2(){
  settotal(total+1)
}

  
  return (
    <div>

      <button onClick={handleClick} >
        click me
      </button>
      Count is {count}
      <button onClick={handleclick2} >
        click me
      </button>
      total  is { total }



    </div>
  )
}

export default App
