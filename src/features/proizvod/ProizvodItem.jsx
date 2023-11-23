/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem, getCart, getCurrentQuantityById } from "../Korpa/cartSlice";
import { useState } from "react";
import UpdateItemKolicina from "../Korpa/UpdateItemKolicina";
import UpdateProizvodItem from "./UpdateProizvodItem";

/* eslint-disable react/prop-types */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 250px;
  height: 350px;
  border: 1px solid #d0d0d0;
  padding: 5px;
  box-sizing: border-box;
  flex-basis: calc(15% - 15px);
  margin: 10px;
`;
const ImgContainer = styled.img`
  max-height: 160px;
  width: 300px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledH1 = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 1em;
  line-height: 1.5em;
  align-self: flex-start;
`;
const CenaContainer = styled.div`
  color: red;
  font-size: 1.5em;
  font-weight: bold;
`;
const DinKom = styled.span`
  font-size: 0.5em;
`;

const Korpa = styled.div`
  margin: 1em 0.5em;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #62b333;
  width: 3.5em;
  text-align: center;
  color: #505050;
  font-size: 1em;
  line-height: 1.5;
  height: 39px;
  border-bottom-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
    border-color: #62b333;
  }
`;
const Button = styled.button`
  color: white;
  background-color: #62b333;
  width: calc(100% - 3.5em);
  border: none;
  box-sizing: border-box;
  font-size: 1em;
  height: 39px;
  vertical-align: top;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

function ProizvodItem({ proizvod }) {
  const [kolicina, setKolicina] = useState(1);
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();
  const { id, Naziv, Kolicina, Kategorija, Cena, Slika } = proizvod;

  const trenutnaKolicina = useSelector(getCurrentQuantityById(id));

  const existingItem = cartItems.find((item) => item.id === id);

  function handleOnChange(e) {
    setKolicina(e.target.value);
  }

  function handleOnClick() {
    const newItem = {
      id,
      Naziv,
      Kolicina: kolicina,
      Cena,
      UkupnaCena: Cena * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <Container>
      <ImgContainer src={Slika} />
      <DescContainer>
        {Kategorija}
        <StyledH1>{Naziv}</StyledH1>

        <CenaContainer>
          {Cena}.<sup>99</sup>
          <DinKom>din/kom</DinKom>
        </CenaContainer>

        {existingItem ? (
          <UpdateProizvodItem
            proizvod={proizvod}
            trenutnaKolicina={trenutnaKolicina}
          />
        ) : (
          <Korpa>
            <Input onChange={handleOnChange} />
            <Button onClick={handleOnClick}>Dodaj</Button>
          </Korpa>
        )}
      </DescContainer>
    </Container>
  );
}

export default ProizvodItem;
