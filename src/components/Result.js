import React, { useState,useEffect } from 'react'
import './Result.css'

export default function Result(props) {

  const score = props.score
  const mode = props.mode

  const rpWBLight = {
    "backgroundColor":"#F8F8F8",
    "border":"5px solid #9282C1"
  }

  const rpWBDark = {
    "backgroundColor":"#292929",
    "border":"5px solid #917FC7"
  }

  const hLight = {
    "color":"#635394"
  }

  const hDark = {
    "color":"#D0C6EF"
  }

  const pbLight = {
    "backgroundColor" : "#8E7CC3"
  }

  const pbDark = {
    "backgroundColor":"#917FC7"
  }

  const [whiteBoxResultPageStyle,setWhiteBoxResultPageStyle] = useState(rpWBLight)
  const [h,setH] = useState(hLight)
  const [pb,setpb] = useState(pbLight)

  useEffect(() => {
    console.log("vuf r")
    setWhiteBoxResultPageStyle(mode == "dark" ? rpWBDark : rpWBLight)
    setH(mode == "dark" ? hDark : hLight)
    setpb(mode == "dark" ? pbDark : pbLight)
  },[mode])

  useEffect(() => {
    setWhiteBoxResultPageStyle(mode == "dark" ? rpWBDark : rpWBLight)
    setH(mode == "dark" ? hDark : hLight)
    setpb(mode == "dark" ? pbDark : pbLight)
  },[])

  let percent = (score/5)*100

  function handleRestart(){
    window.location.reload()
  }

  return (
    <div>
      <div className="mainArea" >
        <div className="whiteBox" style={whiteBoxResultPageStyle}>
          <div className="finalResult" style={h}>
            FINAL RESULT
          </div>
          <div className="correct">
            You got {score} out of 5 correct - ({percent}%)
          </div>
          <div className="restartArea">
            <div className="re restart1" onClick={handleRestart}>
              RESTART GAME
            </div>
            <div className="re restart2"></div>
          </div>
        </div>
        <div className="purpleBox" style={pb}>
        </div>
      </div>
    </div>
  )
}


