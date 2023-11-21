/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
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
    background-color: #446084;
  }
  &:active {
    transform: translateY(2px);
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
