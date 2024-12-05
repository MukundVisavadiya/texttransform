import './Style.css';
import Home from './components/Home';
import Contact from './components/Contact';
import History from './components/History';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  return (
    <>
      <Navbar navList="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/textutils" element={<Textutils mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<History />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );

}

export default App;
