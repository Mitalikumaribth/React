import { useState } from 'react'
import './App.css'
import LogoutBtn from './Component/LogoutBtn'
import LoginBtn from './Component/LoginBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if(!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }

  return (
    <div>
      <h1>Welcome To My Page</h1>
    
    <div>
      {isLoggedIn && <LogoutBtn/>}
      </div>
   
    </div>
  )


  return (
    <div>
    {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  )

  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }

  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App;
