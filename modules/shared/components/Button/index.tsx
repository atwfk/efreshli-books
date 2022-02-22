import React from "react";
import type { FC, ReactElement } from "react";
import { TailSpin } from "react-loader-spinner";
import { StyledButton } from "./styles";

const Button: FC<{ isLoading?: boolean; clicked: () => void }> = ({
  children,
  isLoading,
  clicked,
}): ReactElement => {
  if (isLoading) {
    return (
      <StyledButton type="button">
        <TailSpin color="white" height={15} width={30} />
      </StyledButton>
    );
  }

  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

export default Button;
