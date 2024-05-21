import MiContexto from "./context/MiContexto";
// Archivo: OtroArchivo.js
import React, { useContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'

// Creamos un componente llamado OtroArchivo
const OtroArchivo = () => {
  // Utilizamos el hook useContext() para acceder al contexto MiContexto
  // Extraemos el valor 'clave' y la función 'cambiarClave' del contexto
  const { clave, cambiarClave } = useContext(MiContexto);
  
  // Definimos un estado local 'nuevaClave' y una función 'setNuevaClave' para manejar el valor del campo de entrada
  const [nuevaClave, setNuevaClave] = useState("");

  // Creamos una función llamada 'handleChange' que se ejecuta cuando se cambia el valor del campo de entrada
  const handleChange = (event) => {
    setNuevaClave(event.target.value); // Actualizamos el estado 'nuevaClave' con el nuevo valor del campo de entrada
  };

  // Creamos una función llamada 'handleClick' que se ejecuta cuando se hace clic en el botón
  // Esta función cambia el valor del contexto al valor de 'nuevaClave'
  const handleClick = () => {
    cambiarClave(nuevaClave); // Cambiar el valor del contexto
  };

  // Renderizamos el valor actual del contexto, un campo de entrada para escribir un nuevo valor y un botón para cambiar el valor del contexto
  return (
    <div>
      <p>Valor actual del contexto: {clave}</p>
      <input type="text" value={nuevaClave} onChange={handleChange} /> {/* Campo de entrada para escribir un nuevo valor */}
      <button onClick={handleClick}>Cambiar valor</button> {/* Botón para cambiar el valor del contexto */}
    </div>
  );
};

// Exportamos el componente OtroArchivo para que pueda ser utilizado en otros archivos
export default OtroArchivo;

