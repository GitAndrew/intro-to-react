import React from "react";
import { MainContainer, ContentContainer } from "./styles";
import { Header } from "components";

const NotFound = () => {
  return (
    <MainContainer>
      <Header titleContent="404" />
      <ContentContainer>Page Not Found</ContentContainer>
    </MainContainer>
  );
};

export default NotFound;
