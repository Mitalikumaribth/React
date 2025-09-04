import { useState } from 'react'

import './App.css'
import Button from './Component/Button';  
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
  <div>
    <Button handleClick={handleClick} text="Click me">
      <h1>{count}</h1>
    </Button>

    {/* <Card name="love-babbar">
      <h1>Best WEB DEV Course</h1>
      <p>Trying to be consistant in this</p>
      <p>Will complete the course soon</p>
    </Card> */}
  </div>
  )
}

export default App;
