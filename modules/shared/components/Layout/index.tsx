import React from "react";
import type { FC, ReactElement } from "react";
import Navbar from "../Navbar";
import { StyledMain } from "./styles";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
