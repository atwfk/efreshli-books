import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IHomePage } from "./types/IHomePage";
import Posts from "./components/Posts/Posts";
import Button from "@modules/shared/components/Button";
import styled from "styled-components";
import { getPosts } from "./api/getPosts";
import { IError } from "@modules/shared/types/IError";
import { IPostData } from "@modules/shared/types/IPostData";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HomePage: FC<IHomePage.IProps> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState(data.posts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const newPosts = (await getPosts(page + 1)) as IPostData.IPost[];

      setPosts([...posts, ...newPosts]);
      setPage((prev) => prev++);
    } catch (error: unknown) {
      const { message, errorCode, isError } = error as IError.IErrorData;

      console.log({ message, errorCode, isError });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Posts posts={posts} />
      <StyledDiv>
        <Button isLoading={loading} clicked={getMorePosts}>
          Load More
        </Button>
      </StyledDiv>
    </section>
  );
};

export default HomePage;
