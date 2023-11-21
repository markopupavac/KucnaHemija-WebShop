import styled from "styled-components";

const SideBar = styled.aside`
  width: 23rem;
  height: 100%;
  background-color: #234a57;
`;
const Lista = styled.ul`
  list-style: none;
  color: aliceblue;
  margin: 0;
  padding: 0;
`;
const ElementA = styled.p`
  padding: 18px;
  display: block;
  border-bottom: 1px solid #004044;

  &:hover {
    background-color: #004044;
    cursor: pointer;
  }
  &:active {
    background-color: #003135;
  }
`;
const Button = styled.button`
  width: 100%;
  text-align: left;
`;

// eslint-disable-next-line react/prop-types
function AdminSidebar({ setShowAddItems, setDeleteItems, setShowPorudzbine }) {
  return (
    <SideBar>
      <Lista>
        <Button
          onClick={() => setShowAddItems((showAddItems) => !showAddItems)}
        >
          <ElementA>Dodaj proizvode</ElementA>
        </Button>
        <Button
          onClick={() => setDeleteItems((showDeleteItems) => !showDeleteItems)}
        >
          <ElementA>Ukloni proizvode</ElementA>
        </Button>
        <Button
          onClick={() => setShowPorudzbine((showPorudzbine) => !showPorudzbine)}
        >
          <ElementA>Porudzbine</ElementA>
        </Button>
      </Lista>
    </SideBar>
  );
}

export default AdminSidebar;
