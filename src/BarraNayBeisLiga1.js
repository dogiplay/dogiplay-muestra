import React from 'react'
import {NavLink} from 'react-router-dom';

export const BarraNayBeisLiga1 = () => {
  const nombreliga = localStorage.getItem('nombreliga');
  const claveliga = localStorage.getItem('miclave');
  const estadoliga = localStorage.getItem('estadoliga');
  const categorialiga = localStorage.getItem('categorialiga');
  console.log("ESTADO",estadoliga)
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***LIGA DE BEISBOL {nombreliga} / ESTADO {estadoliga} / CATEGORIA {categorialiga} / CLAVE {claveliga}</NavLink>
          </li>
          <li>
            <NavLink to="/">TORNEO 2024***</NavLink>
          </li>
     
        </ul>
       
      </nav>
    </header>
  )
}
