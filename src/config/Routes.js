import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Home from '../pages/Home/Home.js';
// Importa otros componentes de página según sea necesario

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias:idcategoria" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
