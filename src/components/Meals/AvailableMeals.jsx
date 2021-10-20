import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

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
  const [meals, setMeals] = useState([]);
  const loadedMeals = [];

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://food-app-d91de-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    }
    fetchMeals();
  });

  const mealsList = meals.map((i) => (
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
