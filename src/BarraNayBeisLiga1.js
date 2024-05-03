import React from 'react'
import {NavLink} from 'react-router-dom';

export const BarraNayBeisLiga1 = () => {
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***Liga Municipal de Beisbol de Nayarit</NavLink>
          </li>
          <li>
            <NavLink to="/">Torneo Agosto-Diciembre 2024</NavLink>
          </li>
          <li>
            <NavLink to="/">Presidente: Arturo Rojas***</NavLink>
          </li>
        </ul>
       
      </nav>
    </header>
  )
}
