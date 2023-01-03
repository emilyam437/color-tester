import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllColors() {

  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
  const [toggleWhiteFont, setToggleWhiteFont] = useState("rgb(0, 0, 0)");
  const [fontColorLight, setFontColorLight] = useState("rgb(255, 255, 255)");
  const [fontColorDark, setFontColorDark] = useState("rgb(0, 0, 0)");
  const [userBackgroundColor, setUserBackgroundColor] = useState("rgb(255, 255, 255)");
  const [userFontColor, setUserFontColor] = useState("rgb(0, 0, 0)");
  const [backgroundR, setBackgroundR] = useState("");
  const [backgroundG, setBackgroundG] = useState("");
  const [backgroundB, setBackgroundB] = useState("");
  const [fontR, setFontR] = useState("");
  const [fontG, setFontG] = useState("");
  const [fontB, setFontB] = useState("");

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

const fontColorLightChange = () => {
  const randomColor = [];
  for (let i = 0; i < 3; i++) {
  randomColor.push(Math.floor(Math.random()*256));
}
setFontColorLight(`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`)
}

const fontColorDarkChange = () => {
  const randomColor = [];
  for (let i = 0; i < 3; i++) {
  randomColor.push(Math.floor(Math.random()*256));
}
setFontColorDark(`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`)
}

const userBackgroundColorChange = () => {
  if (backgroundR < 0 | backgroundR > 255) {
    setBackgroundR("0")
  }
  if (backgroundG < 0 | backgroundG > 255) {
    setBackgroundG("0")
  }
  if (backgroundB < 0 | backgroundB > 255) {
    setBackgroundB("0")
  }
  setUserBackgroundColor(`rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`)   
}

const userFontColorChange = () => {
  if (fontR < 0 | fontR > 255) {
    setFontR("0")
  }
  if (fontG < 0 | fontG > 255) {
    setFontG("0")
  }
  if (fontB < 0 | fontB > 255) {
    setFontB("0")
  }
  setUserFontColor(`rgb(${fontR}, ${fontG}, ${fontB})`)   
}

  return (
    <div className="HomeCont">
<div className="colorCont" style={{backgroundColor: backgroundColor, color: toggleWhiteFont}}>
  <h3>Press the button to see a different background color</h3>
  <p>Make a note of the colors you like.</p>
  <button onClick={backgroundColorChange}>New Color</button>
  <br/>
  <button onClick={()=>{setBackgroundColor("rgb(255, 255, 255)")}}>White Background</button>
  <p className="colorName">Current background color is: <strong>{backgroundColor}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/random-background')}}>here</strong> to generate backgrounds for the full page</p>
</div>
<div className="fontColorWhiteCont" style={{backgroundColor: "rgb(255, 255, 255)", color: fontColorDark}}>
  <h3>Press the button to see a different font color</h3>
  <p>Make a note of the colors you like.</p>
  <button onClick={fontColorDarkChange}>New Color</button>
  <br/>
  <button onClick={()=>{setFontColorDark("rgb(0, 0, 0)")}}>Black Font</button>
  <p className="colorName">Current font color is: <strong>{fontColorDark}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/random-font-on-white')}}>here</strong> to generate font colors on the full page</p>
</div>
<div className="fontColorBlackCont" style={{backgroundColor: "rgb(0, 0, 0)", color: fontColorLight}}>
  <h3>Press the button to see a different font color</h3>
  <p>Make a note of the colors you like.</p>
  <button onClick={fontColorLightChange}>New Color</button>
  <br/>
  <button onClick={()=>{setFontColorLight("rgb(255, 255, 255)")}}>White Font</button>
  <p className="colorName">Current font color is: <strong>{fontColorLight}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/random-font-on-black')}}>here</strong> to generate font colors on the full page</p>
</div>
<div className="colorCont" style={{backgroundColor: userBackgroundColor, color: userFontColor}}>
  <h3>Enter your favorite background and font colors to try different combinations:</h3>
  <h4>Background:</h4>
  <p>rgb(<input type="text" onChange={(e)=>{setBackgroundR(e.target.value)}}/>,<input type="text" onChange={(e)=>{setBackgroundG(e.target.value)}}/>,<input type="text" onChange={(e)=>{setBackgroundB(e.target.value)}}/>)</p>
  <button onClick={userBackgroundColorChange}>Submit</button>
  <p className="colorName">Current background color is: <strong>{userBackgroundColor}</strong></p>
  <br/>
  <h4>Font</h4>
  <p>rgb(<input type="text" onChange={(e)=>{setFontR(e.target.value)}}/>,<input type="text" onChange={(e)=>{setFontG(e.target.value)}}/>,<input type="text" onChange={(e)=>{setFontB(e.target.value)}}/>)</p>
  <button onClick={userFontColorChange}>Submit</button>
  <p className="colorName">Current font color is: <strong>{userFontColor}</strong></p>
  <p>click <strong className="linkStrong" onClick={()=>{history('/choose-colors')}}>here</strong> to choose colors on the full page</p>
</div>
    </div>
  );
}


export default AllColors;