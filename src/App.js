import React, { useEffect } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import BackgroundLight from "../src/images/WhatsApp Image 2024-01-18 at 15.21.38.jpeg";

import logoLight from "../src/images/night-mode.png";
import logoDark from "../src/images/night-mode (2).png";
import { useState } from "react";
import qqD from './images/dmqq.png';
import qqL from './images/lmq.png';
import mynewImg from './images/img.png';
import newImage from './images/myDarkImage.png';

function App() {
  // State for controlling light/dark mode
  const [mode, setMode] = useState("light");

  // Function to toggle between light and dark mode
  function changeMode() {
    if (mode === "dark") setMode("light");
    else setMode("dark");
    console.log(mode);
  }

  // State for background image
  const [background, setBackgroundImg] = useState(BackgroundLight);

  // Styles for light and dark mode navbar
  const NavbarDark = {
    "backgroundColor": "#2E2D2D",
    "border": "2px solid white",
  };

  const NavbarLight = {
    "backgroundColor": "White",
  };

  // State for controlling navbar styles
  const [navbar, setNavbar] = useState(NavbarLight);

  // State for controlling logo based on light/dark mode
  const [logo, setLogo] = useState("lightLogo");

  // State for controlling QuikQuiz logo based on light/dark mode
  const [quikQuiz, setQuikQuiz] = useState("qqL");

  // Effect hook to update styles based on mode changes
  useEffect(() => {
    setBackgroundImg(mode === "dark" ? mynewImg : BackgroundLight);
    setNavbar(mode === "dark" ? NavbarDark : NavbarLight);
    setLogo(mode === "dark" ? logoDark : logoLight);
    setQuikQuiz(mode === "dark" ? qqD : qqL);
  }, [mode]);

  return (
    <div>
      {/* Navigation Bar */}
      <div className="nav-1" style={navbar}>
        <img className="logo-2" src={quikQuiz} alt="Logo 2" />
        <img className="dark-mode" src={logo} alt="dark-mode" onClick={changeMode} />
      </div>

      {/* Game Screen */}
      <div className="game-screen">
        <img src={background} className="background-2" alt="background 2" />
      </div>

      {/* Question Box Component */}
      <QuestionBox mode={mode} />
    </div>
  );
}

export default App;
