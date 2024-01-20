import React, { useEffect } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
// import image1 from "../src/images/quikquiz-high-resolution-logo-transparent (1).png";
// import image2 from "../src/images/quikquiz-high-resolution-logo-transparent (2).png";
import BackgroundLight from "../src/images/WhatsApp Image 2024-01-18 at 15.21.38.jpeg"
// import BackgroundDark from "./images/black.png"
import logoLight from "../src/images/night-mode.png"
import logoDark from "../src/images/night-mode (2).png"
import {useState } from "react";
import qqD from './images/dmqq.png'
import qqL from './images/lmq.png'

import mynewImg from './images/img.png'

import newImage from './images/myDarkImage.png'

function App() {

  const [mode , setMode] = useState("light")

    function changeMode(){
      if(mode=="dark")
      setMode("light")
      else
      setMode("dark")
    console.log(mode)
    }

    

    const [background, setBackgroundImg] = useState(BackgroundLight)

    const NavbarDark = {
      "backgroundColor" : "#2E2D2D" ,
      "border" : "2px solid white"
    }

    const NavbarLight = {
      "backgroundColor" : "White"
    }

    const [navbar , setNavbar] = useState(NavbarLight)

    const [logo,setLogo] = useState("lightLogo")

    const [quikQuiz,setQuikQuiz] = useState("qqL")


    useEffect(()=>{
      setBackgroundImg(mode=="dark" ? mynewImg : BackgroundLight)
      setNavbar(mode=="dark" ? NavbarDark : NavbarLight)
      setLogo(mode=="dark" ? logoDark : logoLight)
      setQuikQuiz(mode == "dark" ? qqD : qqL)
    },[mode])
    
  

  return (
    <div>
      
      <div className="nav-1" style={navbar}>
        <img className="logo-2" src={quikQuiz} alt="Logo 2" />
        <img className="dark-mode" src={logo} alt="dark-mode" onClick={changeMode} />
      </div>
      <div className="game-screen">
        <img src={background}  className="background-2" alt="background 2" />
        
      </div>
      <QuestionBox mode={mode}/>


    </div>
  );
}

export default App;
