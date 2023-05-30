// import logo from './logo.svg';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Settings from '../Settings/Settings';
import './App.css';

function App() {

  const [openedPopup, setOpenedPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`App ${isDarkMode && 'App_dark'}`}>
      <Settings setOpenedPopup={setOpenedPopup}  darkMode={isDarkMode}/>
      {openedPopup && <Popup darkMode={isDarkMode} setOpenedPopup={setOpenedPopup}/>}
    </div>
  );
}

export default App;
