import React from 'react';
import './Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';

const App = () => {
  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route path="/detalle/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/> } />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;

