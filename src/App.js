import './App.css';
import './styles.css'
import React from 'react';
import { RutasPrincipal } from './rutas/RutasPrincipal';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import '@aws-amplify/ui-react/styles.css'
import { MiContextoProvider } from './context/MiContexto';




Amplify.configure(config)
function App() {

  return (
    <MiContextoProvider>
      <RutasPrincipal/>

    </MiContextoProvider>
  );
}

export default App;
