/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getProizvodi } from "../../services/apiProizvodi";
import ObrisiProizvodItem from "./ObrisiProizvodItem";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledDiv = styled.div`
  flex: 8;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemContainer = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #234a57;
  border-bottom: 1px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  color: white;
  border-radius: 19px;
  background: #234a57;
  box-shadow: 29px 29px 48px #142a32, -29px -29px 48px #326a7c;
`;
const Div = styled.div`
  height: 90%;
  width: 90%;
`;

function ObrisiProizvod() {
  const {
    isLoading,
    data: proizvodi,
    error,
  } = useQuery({
    queryKey: ["proizvodi"],
    queryFn: getProizvodi,
  });

  if (isLoading) {
    return <SpinnerMini />; // or any loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(proizvodi);

  return (
    <StyledDiv>
      <ItemContainer>
        <Div>
          {proizvodi.map((proizvod) => (
            <ObrisiProizvodItem proizvod={proizvod} key={proizvod.id} />
          ))}
        </Div>
      </ItemContainer>
    </StyledDiv>
  );
}

export default ObrisiProizvod;
