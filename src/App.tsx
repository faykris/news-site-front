import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Websites from './components/Websites/Websites';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isPromo, setIsPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;

        if (window.scrollY === 0) {
          setIsFixed(false);
        } else if (headerTop <= 0) {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closePromo = () => {
    setIsPromo(!isPromo);
  }

  return (
    <div className="App">
      <div className={`top-component ${isFixed ? 'hidden' : ''}`}>
        <Websites />
      </div>
      <div
        ref={headerRef}
        className={`header ${isFixed ? 'fixed' : ''}`}
        style={{
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? 0 : 'initial',
          width: '100%',
          zIndex: 1000, // Opcional: Asegura que el header se superponga correctamente
        }}
      >
        <Header />
      </div>
      <div className={isFixed ? 'add-margin' : 'remove-margin'}>
        <Article />
      </div>
      <div className={isPromo ? 'promo': 'hide'}>
        <FontAwesomeIcon icon={faXmark} className='close' onClick={closePromo} />
        <p>
          Regístrate en Oil Profit y recibe 20% en bonificación sobre tu primera inversión.
        </p>
        <button type='button'>
          Regístrate Ahora
        </button>
      </div>
      <div className="viewers">
        <p>15 personas están viendo esto <FontAwesomeIcon icon={faEye} /></p>
      </div>
      
    </div>
  );
}

export default App;
