import { createContext, useContext } from "react";
import { useState } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { Products } from "./products.jsx";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [newProdukt, setNewProdukt] = useState("");
  const total = 0;

  const addToCart = (newProdukt) => {
    const produkt = {
      id: cart.length === 0 ? 1 : cart[cart.length - 1].id + 1,
      name: newProdukt.name,
      price: newProdukt.price,
    };
    const newCart = [...setCart, produkt];
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((newProdukt) => newProdukt.id !== id));
  };
  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
        <BrowserRouter>
          <nav>
            <Link to="/products">Produkty</Link>
          </nav>
          <Routes>
            <Route path="/products" element={<Products />}>
              Produkty
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
