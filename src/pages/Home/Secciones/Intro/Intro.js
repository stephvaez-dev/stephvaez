import React from 'react';
import './Intro.scss';
import introImage from '../../../../assets/images/photo-intro.jpeg';
import introImage from '../../../../assets/images/img_intro_mobile.png';

const Intro = () => {
  return (
    <section>
      <img className='imagen-intro' src={introImage} alt="Imagen de introducción" />
    </section>
  );
}

export default Intro;
