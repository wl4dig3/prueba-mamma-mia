import { useState } from 'react';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import { Home, Carrito, Pizza } from './pages';
import StateCompo from './context/StateCompo';



function App() {

  return (
    <>
      <StateCompo>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </StateCompo>
    </>
  );
}

export default App
