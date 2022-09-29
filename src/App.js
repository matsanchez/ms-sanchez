import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXT
import { CartProvider } from "../src/context/CartContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemListCategory from "./components/ItemListCategory/ItemListCategory";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
import Page404 from "./components/Page404/Page404";
//VIEWS
import Contacto from "./views/contacto";

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/allproducts" element={<ItemListContainer />} />
            <Route path="/" element={<ItemListCategory />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
