import { SCREENS } from "@modules/shared/constants";
import styled from "styled-components";

export const StyledPost = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 20px;

    @media (max-width: ${SCREENS.MD}) {
      font-size: 25px;
    }
  }

  p {
    font-size: 20px;
    color: #8c8c8c;
    margin-top: 20px;
  }
`;
