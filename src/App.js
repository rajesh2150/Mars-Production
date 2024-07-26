import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import Project from './Components/Project/Project';
import Partner from './Components/Partner/Partner';
import HumanOnMars from './Components/HumanOnMars/HumanOnMars';
import News from './Components/News/News';
// import Img1 from "../assets/Home/Mask group.png";
import Img1 from "./assests/Home/Mask group.png"
import Technology from './Components/Technology/Technology';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className="app-container">
        <img className='.img' src={Img1} alt="" />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/humanonmars' element={<HumanOnMars/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
