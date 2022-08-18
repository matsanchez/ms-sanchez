import logo from './logoms.svg';
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola! Soy Matias Sanchez, próximamente te estare mostrando mis productos</p>
      </header>
    </div>
  );
}

export default App;
