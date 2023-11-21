import styled from "styled-components";
import Logout from "../features/admin/Logout";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import AdminSidebar from "../features/admin/AdminSidebar";
import AddItem from "../features/admin/AddItem";
import { useState } from "react";
import ObrisiProizvod from "../features/admin/ObrisiProizvod";
import Porudzbine from "../features/admin/Porudzbine";

const Main = styled.div`
  background-color: #ffffff;
  height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #01474a;
  text-transform: uppercase;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: white;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid black;
  height: 6.5rem;
`;

const Logotext = styled.h1`
  color: white;
  font-size: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 6rem);
  background-color: aliceblue;
`;

function AdminPage() {
  const [showAddItems, setShowAddItems] = useState(false);
  const [showDeleteItems, setDeleteItems] = useState(false);
  const [showPorudzbine, setShowPorudzbine] = useState(false);

  return (
    <Main>
      <Navbar>
        <Logotext>
          <Link to="/">
            <Logo />
          </Link>
          admin panel
        </Logotext>
        <Logout />
      </Navbar>
      <ContentDiv>
        <AdminSidebar
          setShowAddItems={() => {
            setShowAddItems(true);
            setDeleteItems(false);
            setShowPorudzbine(false);
          }}
          setDeleteItems={() => {
            setDeleteItems(true);
            setShowAddItems(false);
            setShowPorudzbine(false);
          }}
          setShowPorudzbine={() => {
            setShowPorudzbine(true);
            setShowAddItems(false);
            setDeleteItems(false);
          }}
        />
        {showAddItems && <AddItem />}
        {showDeleteItems && <ObrisiProizvod />}
        {showPorudzbine && <Porudzbine />}
      </ContentDiv>
    </Main>
  );
}

export default AdminPage;
