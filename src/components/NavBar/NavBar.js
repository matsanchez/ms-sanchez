import React from "react";
import { AppBar, Box, Toolbar, Typography, Menu, Container, Button, MenuItem, Avatar } from "@mui/material/";
import NavBarMobile from "./NavBarMobile";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const menuLinks = [
  {
    link: "Home",
    to: "/",
    sublinks: false,
  },
  {
    link: "Nosotros",
    to: "/nosotros",
    sublinks: false,
  },
  {
    link: "Productos",
    sublinks: true,
    subMenu: [
      {
        link: "Veladores",
        to: "/category/veladores",
      },
      {
        link: "Macetas",
        to: "/category/macetas",
      },
      {
        link: "Mesa de Luz",
        to: "/category/mesa",
      },
      {
        link: "Percheros",
        to: "/category/percheros",
      },
      {
        link: "Llaveros",
        to: "/category/llaveros",
      },
    ],
  },
  {
    link: "Contacto",
    to: "/contacto",
    sublinks: false,
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-dark">
      <Container maxWidth="xl" className="mt-1 mb-1">
        <Toolbar disableGutters>
          <Link to="/">
            <Avatar
              src={Logo}
              variant="rounded"
              sx={{ width: 56, height: 56, mr: 2, display: { xs: "none", md: "flex" } }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavBarMobile menuLinks={menuLinks} />
          </Box>
          <Link to="/">
            <Avatar
              src={Logo}
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MsCarpinteria
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <>
              {menuLinks.map((menu) =>
                menu.sublinks === true ? (
                  <Box key={menu.link}>
                    <Button
                      id="dropdownMenu"
                      onClick={handleClick}
                      sx={{ my: 2, color: "white", display: "block" }}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      Productos
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "dropdownMenu",
                      }}
                    >
                      {menu.subMenu.map((sub) => (
                        <Link to={sub.to} key={sub.link}>
                          <MenuItem onClick={handleClose}>{sub.link}</MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Link to={menu.to} key={menu.link}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>{menu.link}</Button>
                  </Link>
                )
              )}
            </>
          </Box>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

/* import React from "react";
import { AppBar, Box, Toolbar, Typography, Menu, Container, Button, MenuItem, Avatar } from "@mui/material/";
import NavBarMobile from "./NavBarMobile";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const menuLinks = [
  {
    link: "Home",
    to: "/",
    sublinks: false,
  },
  {
    link: "Nosotros",
    to: "/nosotros",
    sublinks: false,
  },
  {
    link: "Productos",
    sublinks: true,
    subMenu: [
      {
        link: "Veladores",
        to: "/category/veladores",
      },
      {
        link: "Macetas",
        to: "/category/macetas",
      },
      {
        link: "Mesa de Luz",
        to: "/category/mesa",
      },
      {
        link: "Percheros",
        to: "/category/percheros",
      },
      {
        link: "Llaveros",
        to: "/category/llaveros",
      },
    ],
  },
  {
    link: "Contacto",
    to: "/contacto",
    sublinks: false,
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-dark">
      <Container maxWidth="xl" className="mt-1 mb-1">
        <Toolbar disableGutters>
          <Link to="/">
            <Avatar
              src={Logo}
              variant="rounded"
              sx={{ width: 56, height: 56, mr: 2, display: { xs: "none", md: "flex" } }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavBarMobile />
          </Box>
          <Link to="/">
            <Avatar
              src={Logo}
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MsCarpinteria
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link to="/">Home</Link>
              </Button>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link to="/nosotros">Nosotros</Link>
              </Button>
              <Button
                id="dropdownMenu"
                onClick={handleClick}
                sx={{ my: 2, color: "white", display: "block" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                Productos
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "dropdownMenu",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/allproducts">VER TODOS</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/category/veladores">Veladores</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/category/macetas">Macetas</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/category/mesa">Mesa de Luz</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/category/percheros">Percheros</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/category/llaveros">Llaveros</Link>
                </MenuItem>
              </Menu>
            </>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/contacto">Contacto</Link>
            </Button>
          </Box>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar; */
