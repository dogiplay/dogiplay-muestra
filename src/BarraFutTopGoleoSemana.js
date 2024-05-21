import React from 'react'
import {NavLink} from 'react-router-dom';


export const BarraFutTopGoleoSemana = () => {
  return (
    <header className='cajaBarra'>
      <nav>  
        <ul>
        <li>
            <NavLink to="/">***TOP DOGS GOLEADORES DE LA SEMANA**</NavLink>
          </li>
          
        </ul>
       
      </nav>
    </header>
  )
}
