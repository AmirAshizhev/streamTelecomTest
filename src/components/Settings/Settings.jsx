import './Settings.css';

function Settings({setOpenedPopup, darkMode}) {

  function handleClick() {
    setOpenedPopup(true);
  }

  return (
    <div className={`settings ${darkMode && 'settings_dark'}`}>
      <form className='settings__form'>
        <div className='settings__box'>
          <div className={`settings__mech ${darkMode && 'settings__mech_dark'}`}></div>
          <h2  className={`settings__title ${darkMode && 'settings__title_dark'}`}>Настройки</h2>
          <span className='settings__span'>Логин: 77777777777</span>
        </div>

        <div className='settings__auth'>
          <a className='settings__link' href='#' onClick={handleClick}>
            <p className='settings__link-text'>Двухфакторная аутентификация</p>
            <div className='settings__link-img'></div>
          </a>
          <span className='settings__span'>Не подключена</span>
        </div>

        <a className='settings__link' href='#'>
          <p className='settings__link-text'>Настройки безопасности и API</p>
          <div className='settings__link-img settings__link-img_arrow'></div>
        </a>

        <a className='settings__link' href='#'>
          <p className='settings__link-text'>Все протоколы интеграции</p>
          <div className='settings__link-img settings__link-img_arrow'></div>
        </a>

        <button className={`settings__btn ${darkMode && 'settings__btn_dark'}`} type='button'>Создать пароль для API</button>
      </form>
    </div>
  );
}

export default Settings;