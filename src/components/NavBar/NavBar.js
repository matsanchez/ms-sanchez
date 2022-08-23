import "./NavBar.css";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="Nav">
      <nav className={`Nav-nav ${menu ? "isActive" : ""}`}>
        <ul className="Nav-ul">
          <li className="Nav-li">
            <a href="/" className="Nav-a">
              Home
            </a>
          </li>
          <li className="Nav-li">
            <a href="/" className="Nav-a">
              Servicios
            </a>
          </li>
          <li className="Nav-li">
            <a href="/" className="Nav-a">
              Productos
            </a>
          </li>
          <li className="Nav-li">
            <a href="/" className="Nav-a">
              Promociones
            </a>
          </li>
          <li className="Nav-li">
            <a href="/" className="Nav-a">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMenu} className="Nav-button">
        <svg
          className="Nav-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <CartWidget />
    </header>
  );
};

export default NavBar;
