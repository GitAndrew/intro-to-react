import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 2fr;
  grid-gap: 50px;
  margin: 50px;
`;

export const ImageContainer = styled.div`
  grid-column-start: 1;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
`;

export const DirectedBy = styled.div`
  color: #716844;
  border-bottom: 1px solid #716844;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 2rem;
  color: #716844;
  margin-bottom: 10px;
`;
