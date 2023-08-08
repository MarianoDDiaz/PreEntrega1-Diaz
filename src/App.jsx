import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />


      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/productos" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
