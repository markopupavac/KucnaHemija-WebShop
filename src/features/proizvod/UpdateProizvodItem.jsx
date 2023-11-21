/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  setItemQuantity,
} from "../Korpa/cartSlice";

const StyledDiv = styled.div`
  margin: 2em 0.5em;
  display: flex;
  width: calc(100% - 1em);
  justify-content: center;
  align-items: center;
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

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
    background-color: #62b333;
  }
`;

const Input = styled.input`
  border: 1px solid #62b333;
  width: 6em;
  text-align: center;
  color: #505050;
  font-size: 1em;
  line-height: 1.5;
  height: 39px;

  &:focus {
    outline: none;
    border-color: #62b333;
  }
`;

function UpdateProizvodItem({ proizvod, trenutnaKolicina }) {
  const dispatch = useDispatch();
  const { id } = proizvod;

  const handleInputChange = (e) => {
    // You can add validation or other logic here if needed
    // For simplicity, let's assume the input value is always a valid number
    // dispatch(increaseItemQuantity(id, parseInt(e.target.value, 10)));
    // console.log(e, "event");
    if (!e.target.value) {
      dispatch(setItemQuantity({ id, val: 0 }));
      return;
    }
    dispatch(setItemQuantity({ id, val: parseInt(e.target.value) }));
  };

  return (
    <StyledDiv>
      <Button onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
      <Input value={trenutnaKolicina} onChange={handleInputChange} />
      <Button onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
    </StyledDiv>
  );
}

export default UpdateProizvodItem;
