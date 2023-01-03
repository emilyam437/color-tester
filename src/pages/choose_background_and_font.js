import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ChooseColors() {

  const [userBackgroundColor, setUserBackgroundColor] = useState("rgb(255, 255, 255)");
  const [userFontColor, setUserFontColor] = useState("rgb(0, 0, 0)");
  const [backgroundR, setBackgroundR] = useState("");
  const [backgroundG, setBackgroundG] = useState("");
  const [backgroundB, setBackgroundB] = useState("");
  const [fontR, setFontR] = useState("");
  const [fontG, setFontG] = useState("");
  const [fontB, setFontB] = useState("");

  const history = useNavigate();

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

<div className="colorCont2" style={{backgroundColor: userBackgroundColor, color: userFontColor}}>
  <h3 className="title1">Enter your favorite background and font colors to try different combinations:</h3>
  <br/>
  <h4>Background:</h4>
  <p>rgb(<input type="text" onChange={(e)=>{setBackgroundR(e.target.value)}}/>,<input type="text" onChange={(e)=>{setBackgroundG(e.target.value)}}/>,<input type="text" onChange={(e)=>{setBackgroundB(e.target.value)}}/>)</p>
  <button onClick={userBackgroundColorChange}>Submit</button>
  <p className="colorName">Current background color is: <strong>{userBackgroundColor}</strong></p>
  <br/>
  <h4>Font</h4>
  <p>rgb(<input type="text" onChange={(e)=>{setFontR(e.target.value)}}/>,<input type="text" onChange={(e)=>{setFontG(e.target.value)}}/>,<input type="text" onChange={(e)=>{setFontB(e.target.value)}}/>)</p>
  <button onClick={userFontColorChange}>Submit</button>
  <p className="colorName">Current font color is: <strong>{userFontColor}</strong></p>
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
  <p><em>A quick brown fox jumps over the lazy dog.</em></p>
</div>

  )
}

export default ChooseColors;