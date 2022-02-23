import React from "react";
import type { FC, ReactElement } from "react";
import { IPostPage } from "./types/IPostPage";
import PostDetails from "./components/PostDetails";
import RecommendedPosts from "./components/RecommendedPosts";
import { StyledPostPage } from "./styles";

const PostPage: FC<IPostPage.IProps> = ({ data }): ReactElement => {
  return (
    <StyledPostPage>
      <PostDetails post={data.post} />
      <RecommendedPosts posts={data.recommendedPosts} />
    </StyledPostPage>
  );
};

export default PostPage;
