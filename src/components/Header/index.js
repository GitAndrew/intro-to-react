import React from "react";
import {
  HeaderContainer,
  ButtonContainer,
  Button,
  TitleContainer,
  LogoContainer,
  Logo,
} from "./styles";
import { useHistory } from "react-router-dom";
import logo from "images/logo.png";

const Header = ({ hideButton = false, titleContent }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <ButtonContainer>
        {!hideButton && (
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            View All Films
          </Button>
        )}
      </ButtonContainer>
      <TitleContainer>{titleContent}</TitleContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
