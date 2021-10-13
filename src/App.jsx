import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartisShown] = useState(false);

  function showCartHandler() {
    setCartisShown(true);
  }

  // function hideCartHandler() {
  //   setCartisShown(false);
  // }

  return (
    <CartProvider>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
