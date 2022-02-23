import React from "react";
import type { FC, ReactElement } from "react";
import { StyledNav } from "./styles";
import Link from "next/link";

const Navbar: FC = (): ReactElement => {
  return (
    <StyledNav>
      <div>
        <Link href="/">
          <a>Efreshli Books</a>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
