// Loading.js
import React, { useState, useEffect } from 'react';
import './Loading.scss'; // Añade el archivo CSS correspondiente

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga demorada
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia este valor según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-overlay ${loading ? 'visible' : 'hidden'}`}>
      <div className="loading-content">
        <div className="spinner-container">
            <div className="spinner-circle">
            </div>
            <span>STEPHVÁEZ</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
