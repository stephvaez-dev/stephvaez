import React from 'react';
import './Intro.scss';
import introImageMobile from '../../../../assets/images/intro_mobile.png';
import Header from '../../../../components/header/Header';

const Intro = () => {

  return (
    <div id='intro' className='intro-container'>
      <Header />
      <img className='imagen-intro' src={introImageMobile} alt="Imagen de introducción" />
      <div className='intro-content'>
        <span className='intro-title'>La moda urbana que estabas buscando</span>
        <span className='intro-description'>Descubre la fusion perfecta entre diseño y comodidad. Viste la energia que se siente, muestra el estilo que se ve.</span>
        <button className='intro-button'>EXPLORAR COLECCION</button>
      </div>
    </div>
  );
}

export default Intro;
