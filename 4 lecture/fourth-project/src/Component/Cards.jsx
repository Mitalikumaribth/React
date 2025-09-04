import React from 'react'

const Cards = (props) => {
  return (
    <div>
       <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
       <p>Name state variable ki value inside {props.title}: {props.name}</p>
    </div>
  )
}

export default Cards;

{/* <p>I am inside parent Component and value of name is: {name}</p> */}