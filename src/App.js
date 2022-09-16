import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXT
import { CartProvider } from "../src/context/CartContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
//VIEWS
import Nosotros from "./views/nosotros";
import Contacto from "./views/contacto";
import Cart from "./views/cart";

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
