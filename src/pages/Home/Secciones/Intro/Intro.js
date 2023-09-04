import React from 'react';
import './Intro.scss';
import introImageDesktop from '../../../../assets/images/photo-intro.jpeg';
import introImageDosDesktop from '../../../../assets/images/imagen-intro-dos.JPG'
import introImageTresDesktop from '../../../../assets/images/ro_steff.JPG'
import introImageMobile from '../../../../assets/images/img_intro_mobile.png';

const Intro = () => {
  return (
    <section>
      <img className='imagen-intro' src={introImageDesktop} alt="Imagen de introducción" />
      <div className='imagen-intro-dos-box'>
        <img className='imagen-intro-dos' src={introImageDosDesktop} alt="Imagen de introducción" />
      </div>
      <div className='imagen-intro-tres-box'>
        <img className='imagen-intro-tres' src={introImageTresDesktop} alt="Imagen de introducción" />
      </div>
    </section>
  );
}

export default Intro;
