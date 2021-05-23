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
  const [seen, setSeen] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const toggleSeen = () => {
    setSeen(!seen);
  };

  return (
    <MainContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      backgroundImage={backgroundImage}
      seen={seen}
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
          <Button onClick={toggleSeen}>Mark as Seen</Button>
          <Button>Read More &gt;</Button>
        </NavContainer>
      </SubtitleContainer>
    </MainContainer>
  );
};

export default Card;
