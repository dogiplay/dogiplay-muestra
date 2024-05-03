import './App.css';
import './styles.css'
import React from 'react';
import { RutasPrincipal } from './rutas/RutasPrincipal';
import {Amplify} from 'aws-amplify'
import config from './aws-exports'
import '@aws-amplify/ui-react/styles.css'
import {MiContext}  from './context/MiContext';


Amplify.configure(config)
function App() {
  
  return (
    <div>
        <MiContext.Provider>
          <div><RutasPrincipal/></div>
        </MiContext.Provider>  
        
    </div>
    
  );
}

export default App;
