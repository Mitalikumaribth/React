import {  useCallback,useState } from 'react'
import ChildComponent from './Component/ChildComponent'
import ExpensiveComponent from './Component/ExpensiveComponent'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);

  return (
   <div>
    <ExpensiveComponent></ExpensiveComponent>

    <div>
      Count:{count}
    </div>

    <button onClick={handleClick}>Increment</button>

    <div>
      <ChildComponent 
      buttonName="Click me" 
      handleClick={handleClick}
      />  
    </div>
   </div>
  )
}

export default App
  