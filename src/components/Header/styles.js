import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${({ theme }) => theme.header.primary};
  width: 100%;
`;

export const ButtonContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Button = styled.button`
  text-transform: uppercase;
  border-style: none;
  cursor: pointer;
  background: ${({ theme }) => theme.content.secondary};
  border: 1px solid ${({ theme }) => theme.text.secondary};
  color: ${({ theme }) => theme.text.secondary};
  :hover {
    background: ${({ theme }) => theme.header.primary};
    border: 1px solid ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.text.primary};
  }
  margin: 0px 0px 10px 50px;
  padding: 10px;
  user-select: none;
  height: fit-content;
  width: fit-content;
  transition: 0.2s ease;
`;

export const TitleContainer = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: ${({ theme }) => theme.text.secondary};
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
