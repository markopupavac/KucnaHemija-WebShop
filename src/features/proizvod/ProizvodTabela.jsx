/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getProizvodi } from "../../services/apiProizvodi";
import ProizvodItem from "./ProizvodItem";
import { useQuery } from "@tanstack/react-query";
import SpinnerMini from "../../ui/SpinnerMini";

const Tabela = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  width: calc(100% - 23rem);
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: auto;
`;

function ProizvodTabela() {
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

  return (
    <Tabela>
      {proizvodi.map((proizvod) => (
        <ProizvodItem proizvod={proizvod} key={proizvod.id} />
      ))}
    </Tabela>
  );
}

export default ProizvodTabela;
