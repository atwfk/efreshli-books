import { SCREENS } from "@modules/shared/constants";
import styled from "styled-components";

export const StyledNav = styled.nav`
  margin-bottom: 20px 40px;
  border-bottom: 1px solid #eee;
  div {
    padding: 20px 0;
    max-width: ${SCREENS.XL};
    margin: auto;
  }
`;
