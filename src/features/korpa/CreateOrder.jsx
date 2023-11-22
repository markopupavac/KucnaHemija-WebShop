/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../services/apiPorudzbina";
import toast from "react-hot-toast";
import { clearCart, getCart, getUkupanRacun } from "./cartSlice";

const StyledDiv = styled.div`
  background-color: #ffffff;
  backdrop-filter: blur(10px);
  height: 80vh;
  margin: 0 20% 0 20%;
`;

const MenuOrder = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin: 0em 1em 0em 1em;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const StyledLink = styled.button`
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

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
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

const StyledInput = styled.input`
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
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

function CreateOrder() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const finalPrice = useSelector(getUkupanRacun);

  const { register, handleSubmit, reset } = useForm();
  console.log(cart);

  const { mutate: mutateOrder, isLoading: isCreating } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Porudzbina napravljena");
      reset();
      setTimeout(() => {
        navigate("/proizvodi");
      }, 2000);
      dispatch(clearCart());
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => {
    const orderItems = cart.map((item) => ({
      Naziv: item.Naziv,
      Kolicina: item.Kolicina,
      UkupnaCena: item.UkupnaCena,
    }));
    const orderData = {
      ...data,
      proizvodi: orderItems,
      ukupnaCena: finalPrice,
    };

    mutateOrder(orderData);
    console.log(orderData);
  };

  return (
    <StyledDiv>
      <MenuOrder>
        <StyledLink onClick={() => navigate(-1)}>
          &lt; Nastaviti kupovinu
        </StyledLink>
      </MenuOrder>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="naziv">Ime i Prezime:</label>
          <StyledInput type="text" id="Naziv" required {...register("naziv")} />

          <label htmlFor="telefon">Telefon: </label>
          <StyledInput
            type="number"
            id="Cena"
            required
            placeholder="06x/xxx-xx-xx"
            {...register("telefon")}
          />
          <label htmlFor="adresa">Lokacija: </label>
          <StyledInput
            htmlFor="Lokacija"
            type="text"
            {...register("adresa")}
            required
          />

          <Button disabled={isCreating} type="submit">
            Poruči
          </Button>
        </StyledForm>
      </div>
    </StyledDiv>
  );
}

export default CreateOrder;
