import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import About from './components/About'
// let name = "Nikhil" 
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
  }
  
  const toggleStyle = () => {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743' ;
      showAlert("Dark mode hase been Enable","success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode hase been Enable","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleStyle2 = () => {
    if(mode ==='light') {
      setMode("dark");
      document.body.style.backgroundColor = '#045D30';
      showAlert("green mode hase been Enable","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable","success");
    }
  }

  const toggleStyle3 = () => {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'red' ;
      showAlert("Dark mode hase been Enable","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode hase been Enable","success");
    }
  }

  return (
  //  <Router>
  <>
   <Navbar title="TextUtils"  Aboutext="About" mode={mode} toggleStyle={toggleStyle} toggleStyle2={toggleStyle2} toggleStyle3={toggleStyle3} />
   <Alert alert={alert}/>
   <div className="container">
   <TextForm heading ="Enter text below" mode={mode} showAlert = {showAlert}/>
   </div>
    
    {/* // <Routes>
    // <Route path="/Textform" element={<TextForm heading ="Enter text below" mode={mode} showAlert = {showAlert}/>}/>
    // <Route path="/about" element={<About />} />
    
    //  </Routes> */}
  {/* //  </Router> */}

  {/* // ); */}
  </>
  )
}

export default App;
