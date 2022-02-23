import { SCREENS } from "@modules/shared/constants";
import styled from "styled-components";

export const StyledNav = styled.nav`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  div {
    padding: 20px 40px;
    max-width: ${SCREENS.XL};
    margin: auto;
  }
`;
