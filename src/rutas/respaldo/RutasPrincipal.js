import React from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink} from 'react-router-dom';
import { Inicio } from '../Inicio';
import { RegistroPresidente } from '../componentes/RegistroPresidente';
import { RegistroManager } from '../componentes/RegistroManager';
import { Rol } from '../ui-components';

export const RutasPrincipal = () => {
  return (
    <BrowserRouter>
    <header className='header'>
      <nav>
        <ul>
        <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/registropresidente">Registrar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
      <section className='content'>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/registro' element={<Rol/>}/>
            <Route path='/registropresidente' element={<RegistroPresidente/>}/>
            <Route path='/registromanager' element={<RegistroManager/>}/>
        </Routes>
      </section>
    </BrowserRouter>
    
  )
}
