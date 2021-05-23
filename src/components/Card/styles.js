import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  height: 420px;
  border: 1px solid #decbb7;
  font-family: "Work Sans", sans-serif;
  transition: 0.3s ease;
  :hover {
    transform: scale(1.1);
    border: 1px solid #292f36;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  }
  overflow: hidden;
  background-size: 100% 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  width: 100%;
  color: white;
  background: #182425;
  text-transform: uppercase;
`;

export const SubtitleContainer = styled.div`
  height: 120px;
  transition: 0.3s ease;
  width: 100%;
  color: white;
  background: #1e2d2f;
  align-items: center;
  overflow: hidden;
`;

export const SubtitleText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  margin: 10px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  text-transform: uppercase;
  height: 100%;
  background: #1e2d2f;
  border-style: none;
  cursor: pointer;
  color: #decbb7;
  margin: 10px;
  padding: 0px;
  user-select: none;
`;
