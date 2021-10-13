import React from "react";
import { useReducer } from "react";

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      //better to update state in immutable way concat > push
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      console.log(updatedItems);
      console.log(updatedTotalAmount);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case "REMOVE":
      return {};
    default:
      return defaultCartState;
  }
}

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItemHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContextTO = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextTO}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
