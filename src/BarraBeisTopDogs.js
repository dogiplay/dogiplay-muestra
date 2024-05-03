import React from "react";
import { NavLink } from "react-router-dom";

export const BarraBeisTopDogs = () => {
  return (
    <header className="cajaBarra">
      <nav>
        <ul>
          <li>
            <NavLink to="/">***TOP DOGS MVP/AVG GENERAL***</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
