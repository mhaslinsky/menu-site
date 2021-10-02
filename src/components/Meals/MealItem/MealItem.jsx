import styled from "styled-components";

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

function MealItem({ className, name, description, price }) {
  return (
    <li className={className}>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default StyledMealItem;
