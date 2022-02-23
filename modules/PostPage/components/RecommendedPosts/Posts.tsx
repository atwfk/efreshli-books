import React from "react";
import type { FC, ReactElement } from "react";
import { IPostData } from "@modules/shared/types/IPostData";
import Post from "@modules/shared/components/Post";
import withErrorHandler from "@modules/shared/HOC/withErrorHandler";

const Posts: FC<{ posts: IPostData.IPost[] }> = ({ posts }): ReactElement => {
  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default withErrorHandler(Posts, "posts");
