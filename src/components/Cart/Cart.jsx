import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartProvider";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart({ onClick }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  function orderHandler() {
    setIsCheckout(true);
  }

  async function submitOrderHandler(userData) {
    setIsSubmitting(true);
    fetch("https://food-app-d91de-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button-alt"]} onClick={onClick}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClick} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order..</p>;
  const submittedModalContent = (
    <React.Fragment>
      <p>Order sent!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClick}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={onClick}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && submittedModalContent}
    </Modal>
  );
}

export default Cart;
