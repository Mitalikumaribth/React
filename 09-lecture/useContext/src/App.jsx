import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Component/ChildA';



//step 1: create context
// const UserContext = createContext();
 {/* step 2: wrap all the child inside a provider */}
//  step 3: pass value
//  step 4: consumer ke andar jake comsume krna h

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Mitali"});
  const [theme, setTheme] = useState("Light");    


  return (


  <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id="theme-container" style={{ backgroundColor: theme === "Light" ? "red" : "black" }}>
         <ChildA />
      </div>
     
    </ThemeContext.Provider>

    // <>
    // <UserContext.Provider value={user}>
    //     <ChildA />
    // </UserContext.Provider>
    // </>
  )
}

export default App;
// export {UserContext};
export {ThemeContext};
