import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();

  return (
    <div>
        <br/>
        <h2>Try different font and background colors for your next web page!</h2>
        <br/>
    <p className="linkStrong" onClick={()=>{history('/random-background')}}>Generate random background colors</p>
   
    <p className="linkStrong" onClick={()=>{history('/random-font-on-white')}}>Generate random font colors on a white background</p>

    <p className="linkStrong" onClick={()=>{history('/random-font-on-black')}}>Generate random font colors on a black background</p>
   
    <p className="linkStrong" onClick={()=>{history('/choose-colors')}}>Choose font and background colors</p>
   </div>
  )
}

export default Home