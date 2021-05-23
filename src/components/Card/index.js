import React from "react";
import {
  MainContainer,
  TitleContainer,
  SubtitleContainer,
  SubtitleText,
  NavContainer,
  Button,
} from "./styles";

const Card = ({
  originalTitle,
  title,
  description,
  releaseDate,
  backgroundImage,
}) => {
  return (
    <MainContainer backgroundImage={backgroundImage}>
      <TitleContainer>
        <div style={{ color: "grey" }}>{originalTitle}</div>
        <div>{title}</div>
        <div>({releaseDate})</div>
      </TitleContainer>
      <SubtitleContainer>
        <SubtitleText>
          <i>{description}</i>
        </SubtitleText>
        <NavContainer>
          <Button>Mark as Seen</Button>
          <Button>Read More &gt;</Button>
        </NavContainer>
      </SubtitleContainer>
    </MainContainer>
  );
};

export default Card;
