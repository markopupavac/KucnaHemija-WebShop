import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledKorpa = styled(Link)`
  font-size: 2rem;
  color: #446084;
`;

function KorpaIcon() {
  return (
    <>
      <StyledKorpa to="korpa">
        <HiOutlineShoppingCart />
      </StyledKorpa>
    </>
  );
}

export default KorpaIcon;
