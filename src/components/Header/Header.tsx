import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <div className='element'>
        <p>@trecenoticiascr</p>
      </div>
      <div className='element'>
        <img src="	https://alphatrader.best/landers/natdiaz_1718885579/img/logo.png" alt="Logo" />
      </div>
      <div className='element'>
        <p>De Lunes a Domingo</p>
        <p>6:30am - 12md - 6pm</p>
      </div>
      <div className="topics">
        <div>Nacionales</div>
        <div>Mundo</div>
        <div>Tecnología</div>
        <div>Economía</div>
        <div>Entretenimiento</div>
      </div>
    </div>
  )
}

export default Header