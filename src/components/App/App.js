// import logo from './logo.svg';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Settings from '../Settings/Settings';
import './App.css';

function App() {

  const [openedPopup, setOpenedPopup] = useState(true)

  return (
    <div className="App">
      <Settings setOpenedPopup={setOpenedPopup}/>
      {openedPopup && <Popup/>}
    </div>
  );
}

export default App;
