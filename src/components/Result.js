import React, { useEffect } from 'react';
import "./Result.css";

export default function Result({ score, mode }) {

  // Dark-light functionality
  useEffect(() => {
    const main = document.getElementById("maincont");
    if (main) {
      // Apply dark or light mode based on the mode state
      main.className = mode === "dark" ? "dark" : "light";
    }
  }, [mode]);

  const restartQuiz = () => {
    window.location.reload(); // Reload the page to restart the quiz
  };

  return (
    <div>

        <div className="dialogue-box" id='rescont'>
          <h1 id='ress'>Result!</h1>
            <div className='questionsOutOf'><h1 className='values'>{score} out of 5 correct</h1></div>
            <div className='question' id='highlighten' ><h2 className='values'>Percentage: {Math.round((score / 5) * 100)}%</h2></div>
            <div className="highlighting">
              <div className="highlight-div">
              <button className='highlight' id='restart' onClick={restartQuiz}><h2>RESTART</h2></button>
              </div>
            </div>
        </div>

    </div>
  );
}


