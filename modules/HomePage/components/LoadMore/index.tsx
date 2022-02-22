import React from "react";
import type { FC, ReactElement } from "react";
import Button from "@modules/shared/components/Button";
import styled from "styled-components";
import { POSTS_LIMIT } from "@modules/shared/constants";
import { ILoadMore } from "./ILoadMore";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const isLastPage = (total: number, page: number): boolean => {
  return Math.ceil(total / POSTS_LIMIT) === page;
};

const LoadMore: FC<ILoadMore.IProps> = ({
  loading,
  clicked,
  totalPosts,
  page,
}): ReactElement => {
  const lastPage = isLastPage(totalPosts, page);

  return (
    <>
      {!lastPage && (
        <StyledDiv>
          <Button isLoading={loading} clicked={clicked}>
            Load More
          </Button>
        </StyledDiv>
      )}
    </>
  );
};

export default LoadMore;
