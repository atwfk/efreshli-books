import styled from "styled-components";

export const StyledPostsList = styled.div`
  grid-column: 3 / 4;
  @media (max-width: 775px) {
    grid-column: 1 / 4;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 20px;
    }
  }
`;
