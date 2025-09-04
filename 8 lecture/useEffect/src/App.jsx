
import './App.css'
import { useEffect, useState } from 'react'
import LoggerComponent from './Component/LoggerComponent';
import TimerComponent from './Component/TimerComponent';
import DataFetcher from './Component/DataFetcher';
import ResizeComponent from './Component/ResizeComponent';
import MultiEffectComponent from './Component/multiEffectComponent';

function App() {
  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(1);
  

  // //  Variation:1 
  // //  runs on every render

  // useEffect(() => {
  //  alert("Hello Mitali Mishra")
  // })


  // // Variation:2
  // // runs only on first render

  // useEffect(() => {
  //   alert("Hello React");
  // },[])

  // // variation:3
  // // i will run every time when count is updated

  // useEffect(() => {
  //   alert("Hii Mk");
  // },[count])


  // // Variation:4
  // // multiple dependencies

  // useEffect(() => {
  //   alert(" i will run every time when count/total is updated");
  // },[count,total])

  //   // Variation:5
  //   // add a cleanup function

  //   useEffect(() =>{
  //     alert("count is updated");

  //     return () => {
  //       alert("count is unmounted from ui");
  //     }
  //   },[count])




  
  //     function handleClick() {
  //       setCount(count+1);
  // }
  // function handleClickTotal() {
  //   setTotal(total+1);
  // }
  return (
    <div>

      {/* <LoggerComponent></LoggerComponent> */}
      <TimerComponent></TimerComponent>
      {/* <DataFetcher></DataFetcher> */}
      {/* <ResizeComponent></ResizeComponent> */}
      <MultiEffectComponent></MultiEffectComponent>

      
      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      Count is:{count}

      <br />
<button onClick={handleClickTotal}>Update Total</button>
      <br />
      total is:{total} */}

    </div>
  )
}

export default App;

// first = side effect function
// second = clean up function
// third = comma separated list of dependencies



