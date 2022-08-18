const NavBar = () =>{
    return(
  <nav className="navbar navbar-expand-md navbar-dark bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" href="home.html">
        <img src="../logo.png" className="logoMenu" alt="Logo Empresa"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Sobre mi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
    </div>
    </div>
  </nav>
    )
}

export default NavBar

