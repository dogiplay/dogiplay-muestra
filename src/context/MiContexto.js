// Archivo: MiContexto.js
import React, { createContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'
import { useContext } from "react";
// Creamos un contexto llamado MiContexto usando la función createContext() de React
const MiContexto = createContext();

// Creamos un componente llamado MiContextoProvider que proveerá el contexto a la aplicación
export const MiContextoProvider = ({ children }) => {
  // Definimos el estado 'clave' y la función 'cambiarClave' utilizando useState()
  // Inicializamos 'clave' con "Valor inicial"
  const [clave, setClave] = useState("Valor inicial");
  console.log("CLAVE en mi contexto ",clave);
  // Creamos una función llamada 'cambiarClave' que actualizará el estado 'clave' con un nuevo valor
  const cambiarClave = (nuevaClave) => {
    console.log("MiContexto esta con ",nuevaClave);
    setClave(nuevaClave);
  };

  // Devolvemos el proveedor del contexto, envolviendo a los componentes hijos
  // Pasamos el estado 'clave' y la función 'cambiarClave' como value del contexto
  return (
    
    <MiContexto.Provider value={{ clave, cambiarClave }}>
      {children}
      
    </MiContexto.Provider>
  );
};

export const useMiContexto = () => {
  return useContext(MiContexto);
};

// Exportamos el contexto para que pueda ser utilizado por otros componentes
export default MiContexto;
