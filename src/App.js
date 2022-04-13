
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
// import About from './Components/About';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Switch, } from "react-router-dom";

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
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enabled", "success")
    }
  }
  return (

    <>
{/* <Router> */}
      <Navbar title="Texts-format" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        {/* <Switch>
          <Router exact path="/about">
            <About />
          </Router>
          <Router exact path="/"> */}
            <Textform showAlert={showAlert} heading="Words& Charater Counter" mode={mode} />
            {/* <Home/> */}
          {/* </Router> */}
          {/* <Router path ="/link">
    <Link/>
  </Router> */}
        {/* </Switch> */}
         </div>
        {/* </Router> */}
    </>
  );
}

export default App;