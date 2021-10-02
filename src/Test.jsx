import styled from "styled-components";

const styledTest = styled(Test)`
  color: white;
`;

function Test({ className, text }) {
  return <p className={className}>{text}</p>;
}

export default styledTest;
