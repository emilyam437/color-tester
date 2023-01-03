import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RandomFontOnBlack() {

const [fontColorDark, setFontColorDark] = useState("rgb(255, 255, 255)");
const history = useNavigate();

const fontColorDarkChange = () => {
    const randomColor = [];
    for (let i = 0; i < 3; i++) {
    randomColor.push(Math.floor(Math.random()*256));
  }
  setFontColorDark(`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`)
  }
  return (
    <div className="ColorCont2" style={{backgroundColor: "rgb(0, 0, 0)", color: fontColorDark}}>
  <h3 className="title1">Press the button to see a different font color</h3>
  <p>Make a note of the colors you like.</p>
  <button onClick={fontColorDarkChange}>New Color</button>
  <br/>
  <button onClick={()=>{setFontColorDark("rgb(255, 255, 255)")}}>White Font</button>
  <p className="colorName">Current font color is: <strong>{fontColorDark}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/')}}>here</strong> to return home.</p>
  <br/>
  <br/>
  <h1>A quick brown fox jumps over the lazy dog.</h1>
  <br/>
  <h2>A quick brown fox jumps over the lazy dog.</h2>
  <br/>
  <h3>A quick brown fox jumps over the lazy dog.</h3>
  <br/>
  <h4>A quick brown fox jumps over the lazy dog.</h4>
  <br/>
  <h5>A quick brown fox jumps over the lazy dog.</h5>
  <br/>
  <p>A quick brown fox jumps over the lazy dog.</p>
  <br/>
  <p className="lastOnList"><em>A quick brown fox jumps over the lazy dog.</em></p>
</div>
  )
}

export default RandomFontOnBlack;