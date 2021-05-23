import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
