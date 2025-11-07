import React from 'react'

function Card(props) {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setName(e.target.value)} ></input>
      <p>name sate variable ki {props.name}</p> 
    </div>
  )
}

export default Card