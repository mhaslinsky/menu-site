import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartisShown] = useState(false);

  function showCartHandler() {
    setCartisShown(true);
  }

  function hideCartHandler() {
    setCartisShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
