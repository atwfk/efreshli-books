import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  background-color: #b00505;
  padding: 10px;
  width: 180px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #7e0404;
  }
`;
