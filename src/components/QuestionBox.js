import React, { useState, useEffect } from 'react';
import Questions from '../questions'; // Importing question data
import './QuestionBox.css';
import Result from './Result';

export default function QuestionBox(props) {
  // Destructuring props
  const mode = props.mode;

  // Styling objects for dark and light modes
  const head2dark = { "color": "#FFFFFF" };
  const head2light = { "color": "#000000" };
  const head1dark = { "color": "#FFFFFF" };
  const head1light = { "color": "#000000" };
  const box2dark = { "backgroundColor": "#4A4949", "boxShadow": "5px 5px 5px white", "border": "4px solid white" };
  const box2light = { "backgroundColor": "#FFFFFF" };
  const optionss2dark = { "color": "#FFFFFF", "backgroundColor": "#848484" };
  const optionss2light = { "color": "#000000" };
  const highlightsChange = { "color": "#FFFFFF" };
  const highlightsBack = { "color": "#000000" };

  // State variables
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Styling state variables
  const [head2, setHed2] = useState(head2light);
  const [head1, setHead1] = useState(head1light);
  const [box, setBox] = useState(box2light);
  const [optionss, setOptionss] = useState(optionss2light);
  const [highlights, setHighlights] = useState(highlightsChange);

  // Additional style for highlighting
  const highlightStyle = {
    "color": "#FF3333 !important",
  };

  // Effect hooks for updating styles based on mode changes
  useEffect(() => { setHed2(mode === "dark" ? head2dark : head2light) }, [mode]);
  useEffect(() => { setHead1(mode === "dark" ? head1dark : head1light) }, [mode]);
  useEffect(() => { setBox(mode === "dark" ? box2dark : box2light) }, [mode]);
  useEffect(() => { setOptionss(mode === "dark" ? optionss2dark : optionss2light) }, [mode]);
  useEffect(() => { setHighlights(mode === "dark" ? highlightsChange : highlightsBack) }, [mode]);

  // Current question and options
  let question = Questions[currQuestion]?.text;
  let options = Questions[currQuestion]?.options;

  // Restarting the quiz
  const reGame = () => {
    setCurrQuestion(0);
    setScore(0);
  };
  
  // Function to handle option click
  function handleClickOptions(value) {
    let selectedOption = options[value].isCorrect;
    if (selectedOption) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    console.log(score);
  }

  // State and effect for highlighting functionality
  const [highlight, setHighlight] = useState(false);
  const toggleHighlight = () => {}; // TODO: Define the functionality

  // Effect for updating styles based on mode changes and highlighting
  useEffect(() => {
    const highlightElement = document.querySelector('#highlighten');
    if (highlight) {
      highlightElement.classList.add('highlighted');
    } else {
      highlightElement.classList.remove('highlighted');
      setHed2(mode === "dark" ? head2dark : head2light);
    }
  }, [mode, highlight]);

  // Function to remove highlighting
  function handleRemovingHighlight() {
    if (highlight) {
      setHighlight(false);
      const color = mode === "dark" ? "#FFFFFF" : "#000000";
      document.querySelector('#highlighten').style.color = color;
    }
  }

  // Function to handle highlighting
  function handleHighlighting() {
    if (!highlight) {
      setHighlight(true);
      document.querySelector('#highlighten').style.color = "#FF3333";
    }
  }

  // Toggle highlight function
  function high() {
    highlight ? handleRemovingHighlight() : handleHighlighting();
    setHighlight(!highlight);
  }

  // Render JSX
  return (
    <div>
      {currQuestion < 5 ? (
        <div className="dialogue-box" style={box}>
          <div className='questionsOutOf' style={head1}>Question {currQuestion + 1} out of 5</div>
          <div className='question' id='highlighten' style={{ ...head2, ...highlight ? highlightStyle : {} }}>{question}</div>
          <div className='options'>
            {options.map((option, index) => (
              <button key={index} className='ops' onClick={() => handleClickOptions(index)} style={optionss}>
                <h3>{option.text}</h3>
              </button>
            ))}
          </div>
          <div className="highlighting">
            <div className="highlight-div">
              <button className="highlight" onClick={high} style={highlights}>
                {highlight ? "Remove Highlight" : "Highlight"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result reGame={reGame} score={score} mode={mode} />
      )}
    </div>
  );
}
