import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FullPageContainer = styled.div`
  height: 100vh; /* Ensure that the container takes up the full viewport height */
  margin: 0;
  padding: 0;
  overflow: hidden; /* Optional: Hide any potential overflow */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  font-size: 1;
  padding: 10px;
  margin-top: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  color: #eef2ff;
  background-color: #4f46e5;

  &:hover {
    background-color: #446084;
  }
`;

function PocetnaStrana() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/proizvodi");
  }

  return (
    <FullPageContainer>
      <Button onClick={handleClick}>Proizvodi</Button>
    </FullPageContainer>
  );
}

export default PocetnaStrana;
