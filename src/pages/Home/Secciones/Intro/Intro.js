import React from 'react';
import './Intro.scss';
import introImageDesktop from '../../../../assets/images/intro.jpg';
import introImageMobile from '../../../../assets/images/intro_mobile.png';

const Intro = () => {

  return (
    <section id='intro' className='intro-container'>
      <img className='imagen-intro' src={introImageMobile} alt="Imagen de introducción" />
      <div className='intro-content'>
        <h1 className='intro-title'>La moda urbana que estabas buscando</h1>
        <p className='intro-description'>Descubre la fusion perfecta entre diseño y comodidad. Viste la energia que se siente, muestra el estilo que se ve.</p>
        <button className='intro-button'>EXPLORAR COLECCION</button>
      </div>
    </section>
  );
}

export default Intro;
