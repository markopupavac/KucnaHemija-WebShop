import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: whitesmoke;
  height: 3em;
  width: 13em;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
    background-color: #bebebe;
  }
`;

const StyledDiv = styled.div`
  background-color: white;
  backdrop-filter: blur(10px);
  height: 80vh;
  margin: 0 20% 0 20%;
  padding: 1rem;
`;

const Paragraf = styled.p`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function EmptyCart() {
  return (
    <StyledDiv>
      <StyledLink to="/proizvodi">&lt; Vrati se na proizvode</StyledLink>

      <Paragraf className="mt-7 font-semibold">Vaša korpa je prazna.</Paragraf>
    </StyledDiv>
  );
}

export default EmptyCart;
