import React from "react";
import type { FC, ReactElement } from "react";
import { IPostData } from "@modules/shared/types/IPostData";
import { StyledPostsList } from "./styles";
import Posts from "./Posts";

const RecommendedPosts: FC<{
  posts: IPostData.IPost[];
}> = ({ posts }): ReactElement => {
  return (
    <StyledPostsList>
      <h3>Recommended Posts</h3>
      <Posts posts={posts} />
    </StyledPostsList>
  );
};

export default RecommendedPosts;
