import React from "react";
import type { FC, ReactElement } from "react";
import { IPostData } from "@modules/shared/types/IPostData";
import Post from "@modules/shared/components/Post";
import { StyledPostsList } from "./styles";

const RecommendedPosts: FC<{ posts: IPostData.IPost[] }> = ({
  posts,
}): ReactElement => {
  return (
    <StyledPostsList>
      <h3>Recommended Posts</h3>
      <ul>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </StyledPostsList>
  );
};

export default RecommendedPosts;
