import React from "react";
import type { FC } from "react";

// eslint-disable-next-line comma-spacing
const withErrorHandler = <T,>(WrappedComponent: FC<T>, key: string): FC<T> => {
  const C: FC<T> = (props) => {
    // @ts-expect-error Element implicitly has an 'any' type
    if (props[key].isError) {
      // @ts-expect-error Element implicitly has an 'any' type
      return <div>{props[key].message}</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return C;
};

export default withErrorHandler;
