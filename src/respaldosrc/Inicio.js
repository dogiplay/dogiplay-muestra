import React from 'react'
import {Barraprincipal, CardjugadorbeisbolCollection, Rol, Cardjugadorbeisbol, CardequipoBeisbolCollection} from './ui-components'
import './styles.css'
import { SearchField } from '@aws-amplify/ui-react'
export const Inicio = () => {

  return (
    
    <div class="grid-layout">
    <div class="cajaBarra"><Barraprincipal width={'100%'} /></div>
    <div class="cajaEquipos"><CardequipoBeisbolCollection 
   
     
    overrideItems={({item,index})=>({
      overrides:{
        ButtonJugadoresEquipo1:{
          onClick:()=> alert(`${item.nombre}`)
         
        }
        
      }
    }
 
  )
  
  }
    /></div>
      <div class="cajaJugadores"><CardjugadorbeisbolCollection
    /></div>
</div>
  )
}
