import styled from "styled-components";

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

const USAvailableMeals = ({ className }) => {
  const mealsList = DUMMY_MEALS.map((i) => <li>{i.name}</li>);

  return (
    <section className={className}>
      <ul>{mealsList}</ul>
    </section>
  );
};

const StyledAvailableMeals = styled(USAvailableMeals)`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

function AvailableMeals() {
  return <StyledAvailableMeals></StyledAvailableMeals>;
}

export default AvailableMeals;
