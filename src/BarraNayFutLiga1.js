import React from 'react'
import {NavLink} from 'react-router-dom';

export const BarraNayFutLiga1 = () => {
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***FUTBOL</NavLink>
          </li>
          <li>
            <NavLink to="/">TORNEO 2024</NavLink>
          </li>
          <li>
            <NavLink to="/">***</NavLink>
          </li>
        </ul>
       
      </nav>
    </header>
  )
}
