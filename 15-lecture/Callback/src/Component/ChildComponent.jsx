import React from 'react'

const ChildComponent = React.memo(
    (props) => {

        console.log("Child component got re-rendered");

  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
       
    </div>
  )
}
);
export default ChildComponent;

// React.memo => component re render tabhi hoga jab props change hoga.nhi to nhi hoga.

// if tou are sending function, then React.memo wont be able to save you from re render.