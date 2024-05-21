import { CardligaBeisbolCollection, CardligaCollectionFutbol } from './ui-components';
// Archivo: OtroArchivo.js
import React, { useContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'




const LigasFutbol =()  => {

  const [miclave, setMiClave] = useState('');


  const handleChange = (e) => {
    setMiClave(e.target.value);

  };

  const guardarClave = (miclave,nombreliga,estadoliga,categorialiga) => {
    localStorage.setItem('miclave', miclave);
    localStorage.setItem('nombreliga', nombreliga);
    localStorage.setItem('estadoliga', estadoliga);
    localStorage.setItem('categorialiga', categorialiga);
    console.log('Dato guardado:', estadoliga);
    
    window.open('/ligasdefutbol', "_blank");
  };
  
  return (
    <div className='grid-layout'>
   
      <div>
        <h1 className='colorBlanco'>LIGAS DE FUTBOL</h1>
      <p className='colorBlanco'>Busca tu liga por nombre, estado, municipio o clave de liga</p>
    
      <CardligaCollectionFutbol
        overrideItems={({ item, index }) => ({
          overrides: {
            buttonLiga: {
              onClick: () => guardarClave(`${item.clave}`,`${item.nombre}`,`${item.estado}`,`${item.categoria}`),
              //onClick: () => alert(`${item.clave}`),
             

            }

          }
        }

        )

        }
      />
     
    </div>

    <div>
        <h1 className='colorBlanco'>LIGAS DE BEISBOL</h1>
      <p className='colorBlanco'>Busca tu liga por nombre, estado, municipio o clave de liga</p>
    
      <CardligaBeisbolCollection
        overrideItems={({ item, index }) => ({
          overrides: {
            buttonLiga: {
              onClick: () => guardarClave(`${item.clave}`,`${item.nombre}`,`${item.estado}`,`${item.categoria}`),
              //onClick: () => alert(`${item.clave}`),
             

            }

          }
        }

        )

        }
      />
     
    </div>

    </div>
  )
}

export default LigasFutbol;
