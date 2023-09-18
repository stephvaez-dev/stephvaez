import React from 'react';
import './Contacto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
  
  const estiloEnlace = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div id='contacto' className="contact-section">
      <div className="container">
        <div className="social-icons">
          <a target="_blank" style={estiloEnlace} href="https://www.instagram.com/steph.vaez/">
            <div className="social-item">
              <FontAwesomeIcon className='icon-social-red' icon={faInstagram} />
              <p>@steph.vaez</p>
            </div>
          </a>
          <a target="_blank" style={estiloEnlace} href="https://www.instagram.com/steph.vaez/">
            <div className="social-item">
              <FontAwesomeIcon className='icon-social-red' icon={faFacebook} />
              <p>Stephvaez</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
