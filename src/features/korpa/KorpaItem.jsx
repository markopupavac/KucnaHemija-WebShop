/* eslint-disable react/prop-types */
import styled from "styled-components";
import UpdateItemKolicina from "./UpdateItemKolicina";
import DeleteItem from "./DeleteItem";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../korpa/cartSlice";
import formatCurrency from "../../helpers/formatCurrency";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  gap: 3rem;
`;

function KorpaItem({ proizvod }) {
  const { id, Naziv, Kolicina, Cena } = proizvod;

  const trenutnaKolicina = useSelector(getCurrentQuantityById(id));
  const trenutnaCena = Kolicina * Cena;

  return (
    <StyledItem>
      <p>
        {Kolicina} &times; {Naziv}
      </p>
      <StyledDiv>
        <p>{formatCurrency(trenutnaCena)} </p>
        <UpdateItemKolicina id={id} trenutnaKolicina={trenutnaKolicina} />
        <DeleteItem id={id} />
      </StyledDiv>
    </StyledItem>
  );
}

export default KorpaItem;
