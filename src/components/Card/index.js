import React, { useState } from "react";
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
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <MainContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      backgroundImage={backgroundImage}
    >
      <TitleContainer>
        <div style={{ color: "grey" }}>{originalTitle}</div>
        <div>{title}</div>
        <div>({releaseDate})</div>
      </TitleContainer>
      <SubtitleContainer hover={hover}>
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
