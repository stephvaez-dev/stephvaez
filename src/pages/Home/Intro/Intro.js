import React from 'react';
import './Intro.scss';
import Menu from '../../../components/Menu/Menu';

const Intro = () => {

  return (
    <div id='intro' className='intro-container'>
      <Menu />
      <div className='intro-content'>
        <span className='intro-title'>La moda urbana que estabas buscando</span>
        <span className='intro-description'>Descubre la fusion perfecta entre diseño y comodidad. Viste la energia que se siente, muestra el estilo que se ve.</span>
        <button className='intro-button'>EXPLORAR COLECCION</button>
      </div>
    </div>
  );
}

export default Intro;
