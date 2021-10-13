import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../../store/CartProvider";

const StyledMealItem = styled(MealItem)`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;

function MealItem({ className, name, description, price, key }) {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({ id: key, name: name, amount: amount, price: price });
  }

  return (
    <li className={className}>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} key={key} />
      </div>
    </li>
  );
}

export default StyledMealItem;
