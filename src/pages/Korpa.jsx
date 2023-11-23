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
import AnimatedPage from "../ui/AnimatedPage";

const StyledDiv = styled.div`
  background-color: #ffffff;
  backdrop-filter: blur(10px);
  min-height: 80vh;
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
    transform: translateY(2px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: #bebebe;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5em;
  }
`;

const MenuKorpa = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OcistiDugme = styled.button`
  background-color: whitesmoke;
  height: 3em;
  width: 10em;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid black;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: #bebebe;
  }

  @media (max-width: 600px) {
    margin-top: 0.5em;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-top: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px dotted black;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Racun = styled.p`
  padding: 1em;
  font-weight: bold;
`;

const StyledButton = styled.button`
  font-size: 1;
  padding: 10px;
  margin-top: 1em;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  color: #eef2ff;
  background-color: #4f46e5;
  transition: background-color 1s, transform 0.2s ease, box-shadow 0.3s;

  &:hover {
    background-color: #46a7e5;
    transition: background-color 0.5s, font-size 0.5s ease;
    font-weight: bold;
    font-size: 18px;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
    background-color: #46a7e5;
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
    <AnimatedPage>
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
    </AnimatedPage>
  );
}

export default Korpa;
