import React from "react";
import type { FC, ReactElement } from "react";
import Navbar from "../Navbar";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
