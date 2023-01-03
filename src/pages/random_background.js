import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RandomBackground() {
    const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
    const [toggleWhiteFont, setToggleWhiteFont] = useState("rgb(0, 0, 0)");

    const history = useNavigate();

    const backgroundColorChange = () => {
        const randomColor = [];
        for (let i = 0; i < 3; i++) {
        randomColor.push(Math.floor(Math.random()*256));
      }
      setBackgroundColor(`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`)   
      let lightness = randomColor[0] + randomColor[1] + randomColor[2]
      if (lightness > 127 * 3) {
        setToggleWhiteFont("rgb(255, 255, 255)")
    } if (lightness <= 127 * 3) {
      setToggleWhiteFont("rgb(0, 0, 0)")
    }
  }

  const original = () => {
    setBackgroundColor("rgb(255, 255, 255)")
    setToggleWhiteFont("rgb(0, 0, 0)")
  }
  
  return (

<div className="colorCont2" style={{backgroundColor: backgroundColor, color: toggleWhiteFont, marginTop: 0}}>
  <h3 className="title1">Press the button to see a different background color</h3>
  <p>Make a note of the colors you like.</p>
  <button onClick={backgroundColorChange}>New Color</button>
  <br/>
  <button onClick={original}>White Background</button>
  <p className="colorName">Current background color is: <strong>{backgroundColor}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/')}}>here</strong> to return home.</p>
</div>
        
  )
}

export default RandomBackground;