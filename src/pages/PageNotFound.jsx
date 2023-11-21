import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 100px;
  background-color: #3e4a52;
  height: 100vh; /* Ensure that the container takes up the full viewport height */
  margin: 0;
  padding-bottom: 20%;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  return <StyledDiv>PAGE NOT FOUND 404</StyledDiv>;
}

export default PageNotFound;
