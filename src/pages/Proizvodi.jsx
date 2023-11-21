/* eslint-disable no-unused-vars */
import { useState } from "react";
import SidebarMenu from "../ui/SidebarMenu";
import ProizvodiTabela from "../features/proizvod/ProizvodTabela";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  height: calc(100vh - 6.5rem);
  background-color: white;
`;

function Proizvodi() {
  const [show, setShow] = useState(false);

  return (
    <Div>
      <SidebarMenu setShow={setShow} />
      {show && <ProizvodiTabela show={show} />}
    </Div>
  );
}

export default Proizvodi;
