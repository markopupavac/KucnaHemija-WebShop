import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import AnimatedPage from "./AnimatedPage";
const Main = styled.main``;

const StyledDiv = styled.div``;

function AppLayout() {
  return (
    <AnimatedPage>
      <StyledDiv>
        <Header />

        <Main>
          <Outlet />
        </Main>

        {/* <Footer /> */}
      </StyledDiv>
    </AnimatedPage>
  );
}

export default AppLayout;
