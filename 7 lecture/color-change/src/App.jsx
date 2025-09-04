import { useState } from 'react'
import ColorSwitch from './colorSwitch'



function App() {
  const [count, setCount] = useState(0);

  function handlrClickOutside() {
    setClicks(c => + 1);
     }

    function getHandleLightColor() {
      let r = 150 * Math.round(100 * Math.random());
      let g = 150 * Math.round(100 * Math.random());
      let b = 150 * Math.round(100 * Math.random());
      return `rgb(${r}, ${g}, ${b})`;
    }

    function handleChangeColor() {
      let bodyStyle = document.body.style;
      bodyStyle.backgroundColor = getHandleLightColor();
    }


 

  return (
    <div style={{width: '100%', height: '100%'}} onClick={handlrClickOutside}>
      <ColorSwitch onChange={handleChangeColor}/>
      <br />
      <br />
      <h2>Click on the page:</h2>
    </div>
    
    
  );
}

export default App;
