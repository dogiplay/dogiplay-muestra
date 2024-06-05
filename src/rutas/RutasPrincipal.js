import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import NayaritBeisbolLiga1 from '../NayaritBeisbolLiga1';
import NayaritFutbolLiga1 from '../NayaritFutbolLiga1';
import { RegistroPresidente } from '../componentes/RegistroPresidente';
import { RegistroManager } from '../componentes/RegistroManager';
import { Inicio } from '../Inicio';
import { Contacto } from '../componentes/Contacto';
import {CardjugadorfutbolCollectionLigaNayUno, Logodogiplay} from '../ui-components';
import ShippingLabel from '../ShippingLabel';

import {EjemploContexto} from '../EjemploContexto';


export const RutasPrincipal = () => {
  
  return (
  
    <BrowserRouter>
    <header className='header'>
         
      <nav>
      <Logodogiplay className='logo'/>  
      <ul>
      <li>
            <NavLink to="/"><strong>Inicio</strong></NavLink>
          </li> 
          <li>
            <NavLink to="/contacto"><strong>Contacto</strong></NavLink>
          </li>  
          
          </ul>
     
          <strong class='derecha'>Las ligas serias de México están en DOGIPLAY</strong>
      </nav>
    </header>
   
      <section className='content'>
        <Routes>          
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Inicio' element={<Inicio/>}/>
            <Route path='/pdf' element={<ShippingLabel/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/nayaritbeisbolliga1' element={<NayaritBeisbolLiga1/>}/>
            <Route path='/ligasdefutbol' element={<NayaritFutbolLiga1/>}/>
            <Route path='/ligasbeisbol' element={<NayaritBeisbolLiga1/>}/>
            
            <Route path='/futbol' element={<CardjugadorfutbolCollectionLigaNayUno/>}/>
            <Route path='/registropresidente' element={<RegistroPresidente/>}/>
            <Route path='/registromanager' element={<RegistroManager/>}/>
            <Route path='/contexto' element={<EjemploContexto/>}/>
        </Routes>
      </section>
      
    </BrowserRouter>

  )
}
