
import React from 'react' ;
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom' ;
import Home from "./Components/Home"  ;
import Tutorials from "./Components/Tutorials"  ;
import About from "./Components/About"  ; 
import Contact from "./Components/Contact"  ;
import Login from "./Components/Login" ;
import SignUp from "./Components/SignUp" ;
import Videos from "./Components/Videos" ; 



const App = () => {
  
  return (
    <>
    <BrowserRouter> 
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}  /> 
          <Route path="/allvideos" element={<Videos/>} />
           
        </Routes>
       
    </BrowserRouter>
    </>
  )
}

export default App
