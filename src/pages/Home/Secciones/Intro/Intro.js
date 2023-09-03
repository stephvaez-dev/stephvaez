import React from 'react';
import './Intro.scss';
import introImageDesktop from '../../../../assets/images/photo-intro.jpeg';
import introImageMobile from '../../../../assets/images/img_intro_mobile.png';

const Intro = () => {
  return (
    <section>
      <img className='imagen-intro' src={introImageDesktop} alt="Imagen de introducción" />
    </section>
  );
}

export default Intro;
