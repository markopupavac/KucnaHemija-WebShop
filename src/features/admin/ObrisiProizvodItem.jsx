/* eslint-disable react/prop-types */

import styled from "styled-components";
import { deleteProizvod } from "../../services/apiProizvodi";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
/* eslint-disable no-unused-vars */
const StyledItem = styled.li`
  list-style-type: none;
  padding-left: 3rem;
  border-bottom: 1px solid grey;
  width: 90%;
  height: 40%;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;

const Brisanje = styled.button`
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
    background-color: #374151;
  }
`;

const Image = styled.img`
  max-width: 50px;
  margin-right: 10px;
`;

function ObrisiProizvodItem({ proizvod }) {
  const { id: proizvodId, Slika, Naziv } = proizvod;
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteProizvod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["proizvodi"],
      });
      toast.success("Uspesno brisanje proizvoda");
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <StyledItem>
      <Image src={Slika} alt="slika" />
      {Naziv}
      <Brisanje onClick={() => mutate(proizvodId)} disabled={isLoading}>
        Obrisi
      </Brisanje>
    </StyledItem>
  );
}

export default ObrisiProizvodItem;
