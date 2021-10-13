import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  console.log(typeof cartCtx.items);

  const numCartItems = cartCtx.items.reduce((acc, i) => {
    return acc + i.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
