// import logo from './logo.svg';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Settings from '../Settings/Settings';
import './App.css';

function App() {

  const [openedPopup, setOpenedPopup] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="App">
      <Settings setOpenedPopup={setOpenedPopup} darkMode={isDarkMode}/>
      {openedPopup && <Popup darkMode={isDarkMode}/>}
    </div>
  );
}

export default App;
