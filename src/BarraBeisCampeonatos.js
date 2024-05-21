import React from 'react'
import {NavLink} from 'react-router-dom';

export const BarraBeisCampeonatos = () => {
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***HISTORIAL DE CAMPEONATOS DE LA LIGA¨***</NavLink>
          </li>

        </ul>
       
      </nav>
    </header>
  )
}
