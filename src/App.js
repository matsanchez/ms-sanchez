import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  const greeting = {
    title: "Bienvenidos al Proyecto E-commerce en React JS",
    subtitle: "Autor: Matias Sanchez",
  };
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
};

export default App;
