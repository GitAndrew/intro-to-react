import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #716844;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const TitleContainer = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #ede6cb;
  padding: 50px 0px;
`;

export const LogoContainer = styled.div`
  grid-column-start: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 20px 20px 0px;
`;

export const Logo = styled.img`
  height: 100px;
  opacity: 0.5;
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

export const Button = styled.button`
  text-transform: uppercase;
  border-style: none;
  cursor: pointer;
  background: #1e2d2f;
  border: 1px solid #ede6cb;
  color: #ede6cb;
  :hover {
    background: #716844;
    border: 1px solid #ede6cb;
    color: #ede6cb;
  }
  margin: 0px 0px 10px 50px;
  padding: 10px;
  user-select: none;
  height: fit-content;
  width: fit-content;
  transition: 0.2s ease;
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
