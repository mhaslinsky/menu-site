import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheese Pizza",
    description: "Finest cheese and sauce",
    price: 9.0,
  },
  {
    id: "m2",
    name: "French Fries",
    description: "A french wonder!",
    price: 3.5,
  },
  {
    id: "m3",
    name: "Buffalo Wing (5 pieces)",
    description: "American, raw, meaty",
    price: 5.5,
  },
  {
    id: "m4",
    name: "Cheesesteak Sub",
    description: "Super Patriotic",
    price: 7.5,
  },
];

const StyledAvailableMeals = styled(AvailableMeals)`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  .ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function AvailableMeals({ className }) {
  const mealsList = DUMMY_MEALS.map((i) => (
    <MealItem
      key={i.id}
      id={i.id}
      name={i.name}
      description={i.description}
      price={i.price}
    ></MealItem>
  ));

  return (
    <section className={className}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default StyledAvailableMeals;
