import React from "react";
import {
  MainContainer,
  HeaderContainer,
  ButtonContainer,
  Button,
  TitleContainer,
  LogoContainer,
  Logo,
  ContentContainer,
} from "./styles";
import { useHistory } from "react-router-dom";
import logo from "images/logo.png";

const NotFound = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <HeaderContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            View All Films
          </Button>
        </ButtonContainer>
        <TitleContainer>404</TitleContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
      </HeaderContainer>
      <ContentContainer>Page Not Found</ContentContainer>
    </MainContainer>
  );
};

export default NotFound;
