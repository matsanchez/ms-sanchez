import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <Link to="/">
            <Avatar
              src={Logo}
              variant="rounded"
              sx={{ width: 56, height: 56 }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/nosotros" className="link">
              Nosotros
            </Link>
            <NavDropdown
              className="dropdown link-top"
              title="Productos"
              id="collasible-nav-dropdown"
            >
              <div className="subLink">
                <Link to="/category/percheros" className="subLinkItem">
                  Percheros
                </Link>
                <Link to="/category/macetas" className="subLinkItem">
                  Macetas
                </Link>
                <Link to="/category/llaveros" className="subLinkItem">
                  Llaveros
                </Link>
                <Link to="/category/mesa" className="subLinkItem">
                  Mesa de Luz
                </Link>
                <Link to="/category/veladores" className="subLinkItem">
                  Veladores
                </Link>
              </div>
            </NavDropdown>
            <Link to="/contacto" className="link">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <div className="container-search"></div>
          {cart.length === 0 ? null : (
            <div className="container-cartwidget">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </div>
          )}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
