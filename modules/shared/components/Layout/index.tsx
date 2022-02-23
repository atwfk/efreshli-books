import React from "react";
import type { FC, ReactElement } from "react";
import Navbar from "../Navbar";
import { StyledMain, GlobalStyle } from "./styles";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer limit={2} />
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
