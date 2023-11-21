/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  background-color: #e0f6ff;
  padding: 10px 20px;
  margin: 50px 25px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  & .hidden-category {
    position: absolute;
    top: 0;
    left: 100%;
    display: none;
    background-color: #b3e0ff;
    border-radius: 10px;
    list-style: none;
    margin: 0;
  }

  & .hidden-category button {
    background-color: #119da4;
    border: none;
    border-radius: 5px;
    width: 8rem;
    padding: 5px 30px;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Add a smooth transition effect */

    &:hover {
      background-color: #6d9dc5; /* Change the background color on hover */
    }
  }

  /* Hover effect to show the hidden category */
  &:hover {
    & .hidden-category {
      display: flex;
      flex-direction: column;
    }
  }
`;

function SidebarMenuItem({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default SidebarMenuItem;
