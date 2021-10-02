import styled from "styled-components";

const StyledCard = styled(Card)`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

function Card({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default StyledCard;
