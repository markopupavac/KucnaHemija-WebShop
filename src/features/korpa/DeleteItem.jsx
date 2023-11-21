/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

const Button = styled.button`
  background-color: #ffffff;
  height: 2rem;
  border-radius: 10px;
  margin-right: 2rem;
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

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(deleteItem(id))}>
        <RiDeleteBinLine />
      </Button>
    </div>
  );
}

export default DeleteItem;
