import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #1b1b1e;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1.2rem 4.8rem border;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Kontakt</p>
      <p>Lokacija</p>
    </StyledFooter>
  );
}

export default Footer;
