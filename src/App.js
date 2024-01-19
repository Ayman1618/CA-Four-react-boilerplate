import React from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import image1 from "../src/images/quikquiz-high-resolution-logo-transparent (1).png";
import image2 from "../src/images/quikquiz-high-resolution-logo-transparent (2).png";
import image3 from "../src/images/WhatsApp Image 2024-01-18 at 15.21.38.jpeg"
import image4 from "../src/images/WhatsApp_Image_2024-01-18_at_15.21.38-removebg.png"
import {useState } from "react";

function App() {

  // Handle highlight button click
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };
  
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      {/* <div>
        <img className="logo-1" src={image1} alt="Logo 1" />
      </div> */}
      <div className="nav-1">
        <img className="logo-2" src={image2} alt="Logo 2" />
      </div>
      <div className="game-screen">
        <img className="background-2" src={image3} alt="background 2" />
        <div className="dialogue-box">
            <div className='options'> 
                <button id='op-1' className='ops'><h2>Option</h2></button>
                <button id='op-2' className='ops'><h2>Option</h2></button>
                <button id='op-3' className='ops'><h2>Option</h2></button>
                <button id='op-4' className='ops'><h2>Option</h2></button>            
            </div>
            <div className="highlighting">
              <div className="highlight-div">
                <button className="highlight" onClick={toggleHighlight}>
                  {highlight ? "Remove Highlight" : "Highlight"}
                </button>
              </div>
            </div>
        </div>
      </div>
      {/* <div>
        <img className="background-1" src={image4} alt="baclground 1" />
      </div> */}

    </div>
  );
}

export default App;
