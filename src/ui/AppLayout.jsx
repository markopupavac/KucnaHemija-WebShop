import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
// import Footer from "./Footer";

const Main = styled.main``;

const StyledDiv = styled.div``;

function AppLayout() {
  return (
    <StyledDiv>
      <Header />

      <Main>
        <Outlet />
      </Main>

      {/* <Footer /> */}
    </StyledDiv>
  );
}

export default AppLayout;
