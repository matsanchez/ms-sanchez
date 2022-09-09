import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Nosotros from "./views/nosotros";
import Contacto from "./views/contacto";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
