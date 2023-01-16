import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllColors from './pages/all_color_options';
import RandomBackground from './pages/random_background';
import RandomFontOnWhite from './pages/random_font_on_white';
import RandomFontOnBlack from './pages/random_font_on_black';
import ChooseColors from './pages/choose_background_and_font';
import ErrorPage from './pages/error_page';
import Home from './pages/home';

function App() {

  return (

    <Router>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/random-background' element={<RandomBackground />} /> 
      <Route path='/random-font-on-white' element={<RandomFontOnWhite />} /> 
      <Route path='/random-font-on-black' element={<RandomFontOnBlack />} /> 
      <Route path='/choose-colors' element={<ChooseColors />} />
      <Route path='/home' element = {<Home />} />
      <Route path="*" element={<ErrorPage/>} /> 
    </Routes>
  </Router>
  
    )
}

export default App;
