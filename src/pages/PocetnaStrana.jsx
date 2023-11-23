/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
`;

const CarouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  animation: ${fadeInOut} 6s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 10px;
  margin-top: 1rem;
  font-weight: 500;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  color: #eef2ff;
  background-color: #4f46e5;
  z-index: 1;
  &:hover {
    background-color: #446084;
  }
`;

const ImagesContainer = styled.div`
  background-color: green;
  height: 30rem;
  position: relative;
  z-index: 0;
`;
const AboutUsSection = styled.div`
  background-color: #e4e4e4;
  padding: 2rem;
  margin-top: 1rem;
  text-align: center;
`;

const GoogleMapFrame = styled.iframe`
  width: 100%;
  height: 20rem;
  border: 0;
`;

function PocetnaStrana() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["public/univer.jpg", "public/univer2.jpg"];

  const handleClick = () => {
    navigate("/proizvodi");
  };

  return (
    <FullPageContainer>
      <ImagesContainer>
        {images.map((src, index) => (
          <CarouselImage
            key={index}
            src={src}
            style={{
              animationDelay: `-${index * 3}s`,
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        <Button onClick={handleClick}>Pogledaj proizvode</Button>
      </ImagesContainer>

      <GoogleMapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175.69968989209548!2d19.937522416751925!3d45.203388635797225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b0561ef2d82e1%3A0xfa1c038571ead8ec!2sKucna%20Hemija%20str%20M%26G!5e0!3m2!1ssr!2srs!4v1700747229812!5m2!1ssr!2srs"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></GoogleMapFrame>
      <AboutUsSection>
        <h2>About Us</h2>
        <p>
          Your about us content goes here. Add any information you want to share
          about your company or business.
        </p>
      </AboutUsSection>
    </FullPageContainer>
  );
}

export default PocetnaStrana;
