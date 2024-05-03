import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import { NayaritBeisbolLiga1 } from '../NayaritBeisbolLiga1';
import { RegistroPresidente } from '../componentes/RegistroPresidente';
import { RegistroManager } from '../componentes/RegistroManager';
import { Inicio } from '../Inicio';
import { Logodogiplay, Rol } from '../ui-components';
// import { usePDF } from 'react-to-pdf';


export const RutasPrincipal = () => {
  // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <BrowserRouter>
    <header className='header'>
         
      <nav>
      <ul>
      <li>
            <NavLink to="/"><strong>Inicio</strong></NavLink>
          </li> 
          <li>
            <NavLink to="/"><strong>Contacto</strong></NavLink>
          </li>  
          </ul>
      <Logodogiplay className='logo'/>  
 
      </nav>
    </header>
   
      <section className='content'>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Inicio' element={<Inicio/>}/>
            <Route path='/nayaritbeisbolliga1' element={<NayaritBeisbolLiga1/>}/>
            <Route path='/registro' element={<Rol/>}/>
            <Route path='/registropresidente' element={<RegistroPresidente/>}/>
            <Route path='/registromanager' element={<RegistroManager/>}/>
        </Routes>
      </section>
      {/* <div>
         <button onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
            Content to be generated to PDF
         </div>
      </div> */}
    </BrowserRouter>
    
    
  )
}
