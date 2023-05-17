import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowNavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ShowNavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemListContainer />} />
          <Route path="*"  element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
