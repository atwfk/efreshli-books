import styled from "styled-components";

export const StyledPost = styled.div`
  grid-column: 1 / 3;
  @media (max-width: 775px) {
    grid-column: 1 / 4;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #8c8c8c;
    margin-top: 20px;
  }
`;
