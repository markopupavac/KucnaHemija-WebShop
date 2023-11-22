/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePorudzbina } from "../../services/apiPorudzbina";
import toast from "react-hot-toast";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

const Delete = styled.button`
  background-color: #ffffff;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.5rem;
  color: red;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
    background-color: #ffffff;
  }
`;

function DeletePorudzbina({ porudzbine }) {
  const { id: porudzbinaId } = porudzbine;
  console.log(porudzbinaId);
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deletePorudzbina,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["porudzbine"],
      });
      toast.success("Uspesno brisanje pordudzbine");
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <Delete onClick={() => mutate(porudzbinaId)} disabled={isLoading}>
      <RiDeleteBinLine />
    </Delete>
  );
}

export default DeletePorudzbina;
