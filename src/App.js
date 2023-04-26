import React from "react";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <h1>Bienvenido a La Repuestera, el sitio donde encontraras las partes para tu moto</h1>
      <ItemListContainer greeting="Explora nuestros productos" />
    </div>
  );
};

export default App;
