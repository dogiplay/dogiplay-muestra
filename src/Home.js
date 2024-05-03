import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/hola-mundo">
        <button>Ir a Hola Mundo</button>
      </Link>
    </div>
  );
}

export default Home;