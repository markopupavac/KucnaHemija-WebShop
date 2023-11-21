import { Link } from "react-router-dom";
import styled from "styled-components";
import KorpaIcon from "../features/korpa/KorpaIcon";
import { useSelector } from "react-redux";
import AdminIcon from "../features/admin/AdminIcon";
import Logo from "./Logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  text-transform: uppercase;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #000000;
  backdrop-filter: blur(20px);
  height: 6.5rem;
`;

const StyledLink = styled(Link)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  color: #000000;
  opacity: 1;
  font-size: 1.5rem;
  font-family: "Roboto Mono";
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
`;
const StyledKorpa = styled(KorpaIcon)`
  margin-left: 10%;
  opacity: 1;
`;
const KorpaOverview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-weight: bold;
  padding-right: 2rem;
`;

const StyledSpan = styled.span`
  color: #000000;
`;

function Header() {
  const x = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.Kolicina, 0)
  );

  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo />
      </StyledLink>

      <AdminIcon />

      <KorpaOverview>
        <StyledSpan>
          Imate {x} proizvod{x !== 1 ? "a" : ""} u
        </StyledSpan>
        <StyledKorpa />
      </KorpaOverview>
    </StyledHeader>
  );
}

export default Header;
