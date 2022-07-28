import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
