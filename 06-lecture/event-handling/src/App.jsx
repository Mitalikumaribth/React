import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

   function handleMouseOver() {
    alert("Hello Mitali");
  }

  function handleClick()  {
    alert("I am clicked");
  }

  function handleInputChange() {
    console.log("Input value change");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // I am writing my custom behaviour down
    alert("Form Submitted");
  }

 

  return (
    <div>

      <button onClick={() => alert("Hello Mitali")}>Click me</button>
* 
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> 

      * <p onClick={handleMouseOver} style={{border:"1px solid black"}}>I am para</p> 


        {/* <button onClick={handleClick}>
          Click me
        </button> */}
    </div>
  )
}

export default App;
