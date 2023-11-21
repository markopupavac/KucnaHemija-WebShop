import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Button disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </Button>
  );
}

export default Logout;
