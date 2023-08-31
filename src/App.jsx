import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/ShoppingCartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}/>

          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
