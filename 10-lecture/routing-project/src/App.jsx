
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import ParamComp from './Component/ParamComp';
import Courses from './Component/Courses';
import Reports from './Component/Reports';
import MockTest from './Component/MockTest';
import NotFound from './Component/NotFound';  

const router = createBrowserRouter(
  [
  
  {
    path: '/',
    element: 
     <div>
      <Navbar />
      <Home />
     </div>
  },
  {
    path:"/About",
    element:
    <div>
      <Navbar />
      <About />
    </div>
  },
  {
    path:"/Dashboard",
    element:
    <div>
      <Navbar />
      <Dashboard />
    </div> ,
    
    children: [
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: 'mocktest',
        element: <MockTest /> 
      }
    ]
  },
  {
    path:"/student/:id",
    element:
    <div>
      <Navbar />
      <ParamComp />
    </div>
  },
  {
    path: "*",
    element: <NotFound /> 
  }

]
);



function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
