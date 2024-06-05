import React from 'react'
import {NavLink} from 'react-router-dom';

export const BarraNayFutLiga1 = () => {
  const nombreliga = localStorage.getItem('nombreliga');
  const claveliga = localStorage.getItem('miclave');
  const estadoliga = localStorage.getItem('estadoliga');
  const categorialiga = localStorage.getItem('categorialiga');
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
        <NavLink to="/">***LIGA DE FUTBOL {nombreliga} / ESTADO {estadoliga} / CATEGORIA {categorialiga} / CLAVE {claveliga} / TORNEO 2024</NavLink>
          </li>
   
        </ul>
       
      </nav>
    </header>
  )
}
