import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

function MealItemForm({ key, onAddToCart }) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmountInt = parseInt(amountInputRef.current.value);
    const enteredAmountStr = amountInputRef.current.value;

    if (
      enteredAmountStr.trim().length === 0 ||
      enteredAmountInt < 1 ||
      enteredAmountInt > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountInt);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: { key },
          type: "number",
          min: "1",
          max: "50",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount less than 10</p>}
    </form>
  );
}

export default MealItemForm;
