import React from 'react';
import './Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContextProvider from './Components/CartContext';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

const App = () => {
  return (
        <BrowserRouter>
            <CartContextProvider>
            <NavBar />
              <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route path="/detalle/:idItem" element={<ItemDetailContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/> } />
                <Route path="/cart" element={<Cart/> } />
              </Routes>
            <Footer />
            </CartContextProvider>
        </BrowserRouter>
  )
}

export default App;

