import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
// import CadastrarUsuario from './paginas/cadastrarusuario/CadastrarUsuario';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch 
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
