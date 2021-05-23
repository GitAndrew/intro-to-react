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
  id,
  originalTitle,
  title,
  description,
  releaseDate,
  backgroundImage,
  seen,
  toggleSeen,
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
          <Button onClick={() => toggleSeen(id)}>Mark as Seen</Button>
          <Button>Read More &gt;</Button>
        </NavContainer>
      </SubtitleContainer>
    </MainContainer>
  );
};

export default Card;
