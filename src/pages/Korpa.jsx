/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import KorpaItem from "../features/Korpa/KorpaItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getUkupanRacun,
} from "../features/korpa/cartSlice";
import EmptyCart from "../features/korpa/EmptyCart";
import formatCurrency from "../helpers/formatCurrency";

const StyledDiv = styled.div`
  background-color: #ffffff;
  backdrop-filter: blur(10px);
  height: 80vh;
  margin: 0 20% 0 20%;
  display: flex;
  flex-direction: column;
`;

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
const MenuKorpa = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin: 0em 1em 0em 1em;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const OcistiDugme = styled.button`
  background-color: whitesmoke;
  height: 3em;
  width: 10em;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid black;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
    background-color: #bebebe;
  }
`;

const ItemContainer = styled.div`
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  background-color: #ffffff;
  margin-top: 2em;
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted black;
`;

const Racun = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  font-weight: bold;
`;

const StyledButton = styled.button`
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
  &:active {
    transform: translateY(2px);
  }
`;

function Korpa() {
  const proizvodi = useSelector(getCart);
  const navigate = useNavigate();
  const racun = useSelector(getUkupanRacun);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(clearCart());
  }

  if (!proizvodi.length) return <EmptyCart />;

  return (
    <StyledDiv>
      <MenuKorpa>
        <StyledLink to="/proizvodi">&lt; Vrati se na proizvode</StyledLink>
        <OcistiDugme onClick={handleDelete}>Ocisti korpu</OcistiDugme>
      </MenuKorpa>
      <ItemContainer>
        {proizvodi.map((proizvod) => (
          <KorpaItem proizvod={proizvod} key={proizvod.id} />
        ))}
      </ItemContainer>
      <Racun>Ukupna cena: {formatCurrency(racun)}.00 </Racun>

      <StyledButton onClick={() => navigate("/korpa/poruci")}>
        Nastavi plaćanje
      </StyledButton>
    </StyledDiv>
  );
}

export default Korpa;
