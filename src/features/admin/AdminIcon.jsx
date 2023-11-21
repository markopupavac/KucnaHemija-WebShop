import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 2rem;
  border-radius: 6px;

  background-color: #6464fa;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
    background-color: #e21a1a;
  }
`;

const StyledLink = styled(Link)``;

function AdminIcon() {
  return (
    <StyledDiv>
      <StyledLink to="/admin">
        <RiAdminLine />
      </StyledLink>
    </StyledDiv>
  );
}

export default AdminIcon;
