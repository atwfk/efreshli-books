import { SCREENS } from "./../shared/constants";
import styled from "styled-components";

export const StyledPostPage = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media (max-width: ${SCREENS.MD}) {
    grid-template-columns: 1fr;
  }
  grid-gap: 60px;
`;
