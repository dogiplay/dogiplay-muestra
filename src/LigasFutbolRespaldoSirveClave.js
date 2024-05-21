import { CardligaCollectionFutbol } from './ui-components';
import { MiContextoProvider } from './context/MiContexto';
// Archivo: OtroArchivo.js
import React, { useContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'




const LigasFutbol =()  => {

  const [miclave, setMiClave] = useState('');

  const handleChange = (e) => {
    setMiClave(e.target.value);
  };

  const guardarClave = (miclave) => {
    localStorage.setItem('miclave', miclave);
    console.log('Dato guardado:', miclave);
    window.open('/nayaritfutbolliga1', "_blank");
  };
  


  return (
    <>
     <MiContextoProvider>
      <div>
      <p className='colorBlanco'>Busca tu liga por nombre, deporte, estado, municipio o clave de liga como </p>
     
      <CardligaCollectionFutbol
        overrideItems={({ item, index }) => ({
          overrides: {
            buttonLiga: {
              onClick: () => guardarClave(`${item.clave}`),
              //onClick: () => alert(`${item.clave}`),
             

            }

          }
        }

        )

        }
      />
     
    </div>
    </MiContextoProvider>
    </>
  )
}

export default LigasFutbol;
