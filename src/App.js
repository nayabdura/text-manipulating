import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';






function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>

      <div className=" App ">
        <Navbar title="Text Manipulator" Textform="Textform" aboutweb="About" mode={mode} toggleMode={toggleMode} />

        <div className="container">

        </div>
        <Routes>
          <Route exact path='/' element={<Textform heading="Enter Your Text Below!" mode={mode}/>}></Route>
         <Route path="/about" element={<About mode={mode}/>}></Route>
        </Routes>

      </div>

    </>
  );
}

export default App;
