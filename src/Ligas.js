import { CardligaBeisbolCollection, CardligaCollectionFutbol, GlobalBoxCollection, GlobalPitcherCollection, GolesGlobalCollection, HrGlobalCollection } from './ui-components';
// Archivo: OtroArchivo.js
import React, { useContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'


const Ligas =()  => {

  const [miclave, setMiClave] = useState('');

  const handleChange = (e) => {
    setMiClave(e.target.value);

  };

  const guardarClavefutbol = (miclave,nombreliga,estadoliga,categorialiga) => {
    localStorage.setItem('miclave', miclave);
    localStorage.setItem('nombreliga', nombreliga);
    localStorage.setItem('estadoliga', estadoliga);
    localStorage.setItem('categorialiga', categorialiga);
    console.log('Dato guardado:', estadoliga);
    
    window.open('/ligasdefutbol', "_blank");
  };
  const guardarClavebeisbol = (miclave,nombreliga,estadoliga,categorialiga) => {
    localStorage.setItem('miclave', miclave);
    localStorage.setItem('nombreliga', nombreliga);
    localStorage.setItem('estadoliga', estadoliga);
    localStorage.setItem('categorialiga', categorialiga);
    console.log('Dato guardado beis:', estadoliga);
    
    window.open('/ligasbeisbol', "_blank");
  };
  return (
    <div className='grid-layout'>
    <div class="cajaBarra">
       
      </div>
      <div>
      <center><h1 className='colorBlanco'>LIGAS DE FUTBOL</h1></center>
      <p className='colorBlanco'><strong>Busca tu liga por nombre, estado, municipio o clave de liga</strong></p>
    
      <CardligaCollectionFutbol marginLeft={"20px"}
        overrideItems={({ item, index }) => ({
          overrides: {
            buttonLiga: {
              onClick: () => guardarClavefutbol(`${item.clave}`,`${item.nombre}`,`${item.estado}`,`${item.categoria}`),
              //onClick: () => alert(`${item.clave}`),
             

            }

          }
        }

        )

        }
      />
     
    </div>

    <div>
    <center><h1 className='colorBlanco'>LIGAS DE BEISBOL</h1></center>
      <p className='colorBlanco'><strong>Busca tu liga por nombre, estado, municipio o clave de liga</strong></p>
    
      <CardligaBeisbolCollection marginLeft={"20px"}
        overrideItems={({ item, index }) => ({
          overrides: {
            botonLigaBeis: {
              onClick: () => guardarClavebeisbol(`${item.clave}`,`${item.nombre}`,`${item.estado}`,`${item.categoria}`),
              //onClick: () => alert(`${item.clave}`),
             

            }

          }
        }

        )

        }
      />
     
    </div>
    <div className='contenedor100'>
    <center><strong className='colorBlanco'>LIDERES DE HOME RUNS DE TODAS LAS LIGAS</strong></center>
    
    <HrGlobalCollection/>
    <center><h1 className='colorBlanco'>PITCHERS</h1></center>
    
    <GlobalPitcherCollection/>
    <center><strong className='colorBlanco'>LIDERES DE GOLEO DE TODAS LAS LIGAS</strong></center>
    <GolesGlobalCollection/>
    <center><h1 className='colorBlanco'>BOXEADORES</h1></center>
    <GlobalBoxCollection/>
    </div>
    </div>
  )
}

export default Ligas;
