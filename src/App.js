import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.background = "#08061c";
    }
    else{
      setmode('light')
      document.body.style.background ='white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextForm heading="Enter your text to analyze" mode={mode}/>
      </div>
    </>
  );
};
export default App;