import React from 'react'
import {NavLink} from 'react-router-dom';


export const BarraFutTopGoles = () => {
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***TOP DOGS GOLEADORES DEL TORNEO***</NavLink>
          </li>
          
        </ul>
       
      </nav>
    </header>
  )
}
