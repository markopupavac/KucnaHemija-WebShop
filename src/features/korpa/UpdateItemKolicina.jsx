/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../korpa/cartSlice";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6rem;
`;

const Button = styled.button`
  background-color: #dab900;
  height: 30px;
  width: 30px;
  border-radius: 20px;

  &:active {
    transform: translateY(2px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
  }
`;

function UpdateItemKolicina({ id, trenutnaKolicina }) {
  const dispatch = useDispatch();

  return (
    <Div>
      <Button onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
      <span>{trenutnaKolicina}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
    </Div>
  );
}

export default UpdateItemKolicina;
