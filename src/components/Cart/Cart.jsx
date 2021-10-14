import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartProvider";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart({ onClick }) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function removeItemHandler(id) {
    cartCtx.removeItem(id);
  }
  function addItemHandler(item) {
    //overriding amount prop with a 1, otherwise amount would duplicate
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((i) => (
        <CartItem
          key={i.id}
          name={i.name}
          amount={i.amount}
          price={i.price}
          onRemove={removeItemHandler.bind(null, i.id)}
          onAdd={addItemHandler.bind(null, i)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onClick}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
