/* eslint-disable react/prop-types */
import styled from "styled-components";

const Sidebar = styled.div`
  background-color: #446084;
  width: 23rem;
`;

const Button = styled.button`
  background-color: #e0f6ff;
  padding: 10px 20px;
  margin: 50px 25px;
  border-radius: 10px;
  width: calc(100% - 4rem);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  &:active {
    transform: translate(2px);
  }
`;

function SidebarMenu({ setShow }) {
  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <Sidebar>
      <Button onClick={handleClick}>Sredstva za pod</Button>
      <Button>Sredstva za pod</Button>
      <Button>Sredstva za pod</Button>
    </Sidebar>
  );
}

export default SidebarMenu;
