import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const history = useNavigate();
  return (
    <div>
        <br/>
        <h2>This page does not exist</h2>
        <br/>
        <h3>go <strong className="linkStrong" onClick={()=>{history('/')}}>home</strong></h3>

    </div>
  )
};

export default ErrorPage;