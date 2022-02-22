import React from "react";
import type { FC, ReactElement } from "react";
import Post from "@modules/shared/components/Post";
import styled from "styled-components";
import { IPostData } from "@modules/shared/types/IPostData";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;

const Posts: FC<{ posts: IPostData.IPost[] }> = ({ posts }): ReactElement => {
  return (
    <StyledUl>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledUl>
  );
};

export default Posts;
