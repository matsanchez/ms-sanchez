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
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/nosotros" className="link">
                Nosotros
              </Link>
            </Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item className="subLink">
                <Link to="/category/percheros" className="subLinkItem">
                  Percheros
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="subLink">
                <Link to="/category/macetas" className="subLinkItem">
                  Macetas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="subLink">
                <Link to="/category/llaveros" className="subLinkItem">
                  Llaveros
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="subLink">
                <Link to="/category/mesa" className="subLinkItem">
                  Mesa de Luz
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="subLink">
                <Link to="/category/veladores" className="subLinkItem">
                  Veladores
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/contacto" className="link">
                Contacto
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
