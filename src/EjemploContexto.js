// Archivo: index.js o App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { MiContextoProvider } from "./context/MiContexto";
import OtroArchivo from './OtroArchivo';

export const EjemploContexto = () => {
  return (
    <MiContextoProvider>
      <OtroArchivo/>
      <OtroArchivo/>
      <OtroArchivo/>
      <OtroArchivo/>
      <OtroArchivo/>
      <OtroArchivo/>
    </MiContextoProvider>
  );
};



export default EjemploContexto;
