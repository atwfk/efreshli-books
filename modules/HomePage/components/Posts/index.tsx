import React, { memo } from "react";
import type { FC, ReactElement } from "react";
import Post from "@modules/shared/components/Post";
import { IPostData } from "@modules/shared/types/IPostData";
import { StyledUl } from "./styles";

const Posts: FC<{ posts: IPostData.IPost[] }> = ({ posts }): ReactElement => {
  return (
    <StyledUl>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledUl>
  );
};

export default memo(Posts);
