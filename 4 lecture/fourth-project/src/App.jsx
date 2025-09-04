import React, { useState } from 'react'
import './App.css'
import Cards from './Component/Cards'


function App() {
 const [name, setName] = useState('');

  return (
    <div>
    <Cards title="Card1" name={name} setName={setName} />
      <Cards title="Card2" name={name} setName={setName} />
    
    </div>
   
  )
}

export default App;
