import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #716844;
  width: 100%;
`;

export const Title = styled.div`
  grid-column-start: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #ede6cb;
  padding: 30px;
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

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 50px;
`;

export const SearchContainer = styled.div`
  margin-top: 50px;
  align-self: center;
`;
