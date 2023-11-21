import styled from "styled-components";

const Image = styled.img`
  height: 5rem;
  width: 8rem;
  object-fit: cover;
`;

function Logo() {
  return <Image src="mg-high-resolution-logo-black-transparent.png" />;
}

export default Logo;
