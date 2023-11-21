/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProizvod } from "../../services/apiProizvodi";
import toast from "react-hot-toast";
import { useState } from "react";

const Div = styled.div`
  flex: 8;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  background-color: #234a57;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2%;
  margin-bottom: 8rem;
  border: 1px solid black;
  color: white;
  gap: 20px;
  width: 50%;
  border-radius: 19px;
  background: #234a57;
  box-shadow: 29px 29px 48px #142a32, -29px -29px 48px #326a7c;
`;
const Input = styled.input`
  border: 2px solid transparent;
  width: 20em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  color: black;
  background-color: #f3f3f3;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover,
  &:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1rem 3rem;
  margin-top: 2rem;
  font-weight: 500;
  border: none;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  color: #eef2ff;
  background-color: #4f46e5;

  &:hover {
    background-color: #374151;
  }
  &:active {
    transform: translateY(4px);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  cursor: pointer;
  background-color: #dab900;
  color: black;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd900;
  }
`;

function AddItem() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const [fileName, setFileName] = useState("");

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: addProizvod,
    onSuccess: () => {
      toast.success("Proizvod usepesno dodat");
      queryClient.invalidateQueries({ queryKey: ["proizvodi"] });
      reset();
      setFileName("");
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, Slika: data.Slika[0] });
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Naziv">Naziv: </label>
        <Input type="text" id="Naziv" {...register("Naziv")} />
        <label htmlFor="Kategorija">Kategorija </label>
        <Input type="text" id="Kategorija" {...register("Kategorija")} />
        <label htmlFor="Cena">Cena: </label>
        <Input type="number" id="Cena" {...register("Cena")} />
        <FileInput
          type="file"
          id="Slika"
          accept="image/*"
          {...register("Slika")}
          onChange={handleFileChange}
        />
        <FileInputLabel htmlFor="Slika">
          {fileName || "Izaberi sliku"}
        </FileInputLabel>

        <Button disabled={isCreating} type="submit">
          Submit
        </Button>
      </Form>
    </Div>
  );
}

export default AddItem;
