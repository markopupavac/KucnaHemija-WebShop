import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../features/admin/useLogin";
import SpinnerMini from "../ui/SpinnerMini";
import { useUser } from "../features/admin/useUser";
import AnimatedPage from "../ui/AnimatedPage";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
  border-radius: 0px;
  margin-left: 35%;
  margin-top: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: linear-gradient(145deg, #49678d, #3d5677);
  box-shadow: 26px 26px 50px #30435c, -26px -26px 50px #587dac;
`;

const Button = styled.button`
  font-size: 1;
  padding: 10px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  color: #eef2ff;
  background-color: #4f46e5;

  &:hover {
    background-color: #446084;
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: gold;
  padding-top: 2rem;
`;

const DIV = styled.div`
  background-color: #446084;

  height: 100vh;
  padding-top: 10px;
`;

const StyledLink = styled(Link)`
  background-color: white;
  height: 2em;
  width: 10em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 6px;

  &:active {
    transform: translateY(3px); /* Move the button down slightly when clicked */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Optional: Add a subtle box shadow */
  }
`;

const Input = styled.input`
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #f3f3f3;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover,
  &:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          navigate("/admin");
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/admin");
    },
    [isAuthenticated, navigate]
  );

  return (
    <AnimatedPage>
      <DIV>
        <StyledLink to="/">Vrati se nazad</StyledLink>
        <Container onSubmit={handleSubmit}>
          <H1>Admin panel</H1>
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Log in" : <SpinnerMini />}
          </Button>
        </Container>
      </DIV>
    </AnimatedPage>
  );
}

export default LoginForm;
