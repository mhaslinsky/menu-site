import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm({ key }) {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
