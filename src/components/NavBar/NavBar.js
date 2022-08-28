import "./NavBar.css";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import IconNav from "./IconNav";

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
        <IconNav />
      </button>
      <CartWidget />
    </header>
  );
};

export default NavBar;
