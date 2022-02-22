import styled from "styled-components";

export const StyledPost = styled.li`
  box-shadow: 2px 2px 12px rgb(0 0 0 / 30%);

  div {
    padding: 8px 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: #8c8c8c;
    }
  }
  div > * {
    margin-bottom: 20px;
  }
`;
