import { useEffect, useState } from 'react';
import Popup from '../Popup/Popup';
import Settings from '../Settings/Settings';
import './App.css';

function App() {

  const [openedPopup, setOpenedPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(themeQuery.matches)

    const handleThemeChanges = () => {
      setIsDarkMode(themeQuery.matches)
    }

    themeQuery.addEventListener('change', handleThemeChanges);

    return () => {
      themeQuery.removeEventListener('change', handleThemeChanges);
    };

  },[])

  return (
    <div className={`App ${isDarkMode && 'App_dark'}`}>
      <Settings setOpenedPopup={setOpenedPopup}  darkMode={isDarkMode}/>
      {openedPopup && <Popup darkMode={isDarkMode} setOpenedPopup={setOpenedPopup}/>}
    </div>
  );
}

export default App;
