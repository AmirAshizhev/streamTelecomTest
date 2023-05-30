import './Popup.css';

function Popup({darkMode, setOpenedPopup}) {

  function handleClick() {
    setOpenedPopup(false);
  }

  return (
    <div className={`popup ${darkMode && 'popup_dark'}`}>
      <div className={`popup__countainer ${darkMode && 'popup__countainer_dark'}`}>
        <button className={`popup__bth ${darkMode && 'popup__bth_dark'}`} type='button' onClick={handleClick}></button>
        <h2 className={`popup__title ${darkMode && 'popup__title_dark'}`}>Заголовок</h2>
        <p className={`popup__text ${darkMode && 'popup__text_dark'}`}>Lorem ipsum dolor sit amet consectetur. Pretium enim turpis posuere amet orci. Consectetur dui velit et quam id. Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
}

export default Popup;
