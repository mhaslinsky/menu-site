import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/CartProvider";

function HeaderCartButton({ onClick }) {
  const [buttonAnim, setButtonAnim] = useState(false);
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((acc, i) => {
    return acc + i.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonAnim ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonAnim(true);

    const timer = setTimeout(() => {
      setButtonAnim(false);
    }, 300);

    return () => {
      // clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
