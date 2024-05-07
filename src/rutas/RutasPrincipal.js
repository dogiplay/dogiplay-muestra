import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import { NayaritBeisbolLiga1 } from '../NayaritBeisbolLiga1';
import { RegistroPresidente } from '../componentes/RegistroPresidente';
import { RegistroManager } from '../componentes/RegistroManager';
import { Inicio } from '../Inicio';
import { Contacto } from '../componentes/Contacto';
import { Logodogiplay, Rol } from '../ui-components';
// import { usePDF } from 'react-to-pdf';


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
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/nayaritbeisbolliga1' element={<NayaritBeisbolLiga1/>}/>
            <Route path='/registropresidente' element={<RegistroPresidente/>}/>
            <Route path='/registromanager' element={<RegistroManager/>}/>
        </Routes>
      </section>
      
    </BrowserRouter>
    
    
  )
}
