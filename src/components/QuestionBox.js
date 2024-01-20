import React, { useState , useEffect } from 'react'
import Questions from '../questions'
import questions from '../questions';
import './QuestionBox.css';
import Result from './Result';

export default function QuestionBox(props) {


  const listOfQuestions = questions;
  const mode = props.mode;
  const head2dark = {
    "color" : "#FFFFFF"
  }

  const head2light = {
    "color" : "#000000"
  }

  const head1dark = {
    "color" : "#FFFFFF"
  }

  const head1light = {
    "color" : "#000000"
  }

  const box2dark = {
    "backgroundColor" : "#4A4949" ,
    "boxShadow" : "5px 5px 5px white" ,
    "border" : "4px solid white"
  }

  const box2light = {
    "backgroundColor" : "#FFFFFF"
  }

  const optionss2dark = {
    "color" : "#FFFFFF" ,
    "backgroundColor" : "#848484"
    
  }

  const optionss2light = {
    "color" : "#000000"
  }

  const highlightsChange = {
    "color" : "#FFFFFF"
  }

  const highlightsBack = {
    "color" : "#000000"
  }

  const [currQuestion , setCurrQuestion] = useState(0);
  const [score , setScore] = useState(0);

  const [head2 , setHed2] = useState(head2light)
  useEffect(()=>{
    
      setHed2(mode == "dark" ? head2dark : head2light)
  },[mode])

  const [head1 , setHead1] = useState(head1light)
  useEffect(()=>{
    setHead1(mode=="dark" ? head1dark : head1light)
  },[mode])

  const [box , setBox] = useState(box2light)
  useEffect(()=>{
    setBox(mode=="dark" ? box2dark : box2light)
  },[mode])

  const [optionss , setOptionss] = useState(optionss2light)
  useEffect(()=>{
    setOptionss(mode=="dark" ? optionss2dark : optionss2light)
  },[mode])

  const [highlights , setHighlights] = useState(highlightsChange)
  useEffect(()=>{
    setHighlights(mode=="dark" ? highlightsChange : highlightsBack)
  },[mode])
  
  let question = listOfQuestions[currQuestion].text
  let options = listOfQuestions[currQuestion].options

  function handleClickOptions(value){
    let selectedOption = options[value].isCorrect
    if(selectedOption == true)
    {
      setScore(score + 1)
    }
    setCurrQuestion(currQuestion+1)
    console.log(score)
  }

  // Handle highlight button click
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };
  
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (highlight) {
      document.querySelector('#highlighten').style.color = "#FF3333";
    }
    else {
      setHed2(mode === "dark" ? head2dark : head2light);
    }
  }, [mode, highlight]);


  function handleRemovingHighlight() {
    if (highlight) {
      setHighlight(false);
      if (mode === "dark") {
        document.querySelector('#highlighten').style.color = "#BBACE7";
      }
      else {
        document.querySelector('#highlighten').style.color = "#7660B7";
      }
    }
  }

  function handleHighlighting() {
    
    if (!highlight) {
      setHighlight(true);
      document.querySelector('#highlighten').style.color = "#FF3333";
    }
  }

  return (
    <div>
      { currQuestion < 4 ? (
      <div className="dialogue-box" style={box}>
            <div className='questionsOutOf' style={head1}>Question {currQuestion + 1} out of 5</div>
            <div className='question' id='highlighten' style={head2}>{question}</div>
            <div className='options'> 
                <button id='op-1' className='ops' onClick={() => handleClickOptions(0)} style={optionss}><h3>{options[0].text}</h3></button>
                <button id='op-2' className='ops' onClick={() => handleClickOptions(1)} style={optionss}><h3>{options[1].text}</h3></button>
                <button id='op-3' className='ops' onClick={() => handleClickOptions(2)} style={optionss}><h3>{options[2].text}</h3></button>
                <button id='op-4' className='ops' onClick={() => handleClickOptions(3)} style={optionss}><h3>{options[3].text}</h3></button>            
            </div>
            <div className="highlighting">
              <div className="highlight-div">
                <button className="highlight" onClick={toggleHighlight} style={highlights}>
                  {highlight ? "Remove Highlight" : "Highlight"}
                </button>
              </div>
            </div>
        </div>): ( <Result  />)}
      
    </div>
  )
}

