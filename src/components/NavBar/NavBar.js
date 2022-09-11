import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-9 logoNav"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          <div className="container-search">{/* <Search /> */}</div>
          <div className="container-cartwidget">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
