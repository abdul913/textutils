import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/About';

function App() {

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
   setAlert({
    msg : message,
    type : type
   });
   setTimeout(() => {
    setAlert(null)
   }, 2000);
  }
   

  const onoffMode =()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
        document.title = 'My First React App-Dark Mode'
   
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = 'My First React App'
    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
    <Navbar title="Title Name" mode={mode} toggleClk={onoffMode}/>
    <Alert alert={alert}/>
    <div className='container my-3' >
      {/* <Routes> */}
        {/* <Route path="/" element={}/> */}
        {/* <Route path="/about" element={<About/>}/> */}
     {/* </Routes> */}
     <Textform heading="Enter The Text To Analize" showAlert={showAlert} mode={mode} />
    </div>
  {/* </BrowserRouter> */}
  </>
  )
}

export default App;