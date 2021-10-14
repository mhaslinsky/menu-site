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
  let existingCartItemIndex, existingCartItem, updatedTotalAmount, updatedItems;
  switch (action.type) {
    case "ADD":
      //check to see if item already exists in cart
      existingCartItemIndex = state.items.findIndex(
        (i) => i.id === action.item.id
      );
      //if it does, set item to variable
      existingCartItem = state.items[existingCartItemIndex];
      //if not null, meaning it exists
      if (existingCartItem) {
        //update existing item immutably, by setting equal to new variable
        //and adding action amount to existing item amount
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        //create new array of cart items
        updatedItems = [...state.items];
        //update the existing index with the new item with update amount
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        //better to update state in immutable way concat > push
        //this is done only if item is new
        updatedItems = state.items.concat(action.item);
      }

      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case "REMOVE":
      //very similar logic to above, just using filter to remove when amount goes to 0
      existingCartItemIndex = state.items.findIndex((i) => i.id === action.id);
      console.log(existingCartItemIndex);
      existingCartItem = state.items[existingCartItemIndex];
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((i) => i.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
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
