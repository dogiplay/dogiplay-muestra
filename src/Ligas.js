import { CardAtletismoCollection, CardFisioculturismoCollection, CardligaBeisbolCollection, CardligaCollectionFutbol, GlobalBoxCollection, GlobalPitcherCollection, GolesGlobalCollection, HrGlobalCollection, SalondelaFamaCollection } from './ui-components';
// Archivo: OtroArchivo.js
import React, { useContext, useState } from "react"; // Importamos React y las funciones necesarias desde la biblioteca 'react'


const Ligas = () => {

  const [miclave, setMiClave] = useState('');

  const handleChange = (e) => {
    setMiClave(e.target.value);

  };

  const guardarClavefutbol = (miclave, nombreliga, estadoliga, categorialiga) => {
    localStorage.setItem('miclave', miclave);
    localStorage.setItem('nombreliga', nombreliga);
    localStorage.setItem('estadoliga', estadoliga);
    localStorage.setItem('categorialiga', categorialiga);
    console.log('Dato guardado:', estadoliga);

    window.open('/ligasdefutbol', "_blank");
  };
  const guardarClavebeisbol = (miclave, nombreliga, estadoliga, categorialiga) => {
    localStorage.setItem('miclave', miclave);
    localStorage.setItem('nombreliga', nombreliga);
    localStorage.setItem('estadoliga', estadoliga);
    localStorage.setItem('categorialiga', categorialiga);
    console.log('Dato guardado beis:', estadoliga);

    window.open('/ligasbeisbol', "_blank");
  };
  return (
    <div className='grid-layout'>
       <div className='contenedor100'>
       <div class="cajaBarra">
       <center><h1 className='colorBlanco'>SALÓN DE LA FAMA</h1></center>
       <SalondelaFamaCollection/>
       <center><h1 className='colorBlanco'>BASE DE DATOS NACIONAL DE PITCHERS</h1></center>
       </div>
       <GlobalPitcherCollection />
       <center><h1 className='colorBlanco'>BASE DE DATOS NACIONAL DE ATLETAS FISICOCULTURISMO</h1></center>
       <CardFisioculturismoCollection/>
       <center><h1 className='colorBlanco'>BASE DE DATOS NACIONAL DE BOXEADORES</h1></center>
       <GlobalBoxCollection />
       <center><h1 className='colorBlanco'>BASE DE DATOS NACIONAL DE ATLETAS</h1></center>
       <CardAtletismoCollection/>
     
       
       
     
      {/* <div>
        <center><h1 className='colorBlanco'>LIGAS DE FUTBOL</h1></center>
        <p className='colorBlanco'><strong>Busca tu liga por nombre, estado, municipio o clave de liga</strong></p>

        <CardligaCollectionFutbol marginLeft={"20px"}
          overrideItems={({ item, index }) => ({
            overrides: {
              buttonLiga: {
                onClick: () => guardarClavefutbol(`${item.clave}`, `${item.nombre}`, `${item.estado}`, `${item.categoria}`),
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
                onClick: () => guardarClavebeisbol(`${item.clave}`, `${item.nombre}`, `${item.estado}`, `${item.categoria}`),
                //onClick: () => alert(`${item.clave}`),


              }

            }
          }

          )

          }
        />

       </div>*/}
      </div> 
    </div>
  )
}

export default Ligas;
