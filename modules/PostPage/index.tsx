import React from "react";
import type { FC, ReactElement } from "react";
import { IPostPage } from "./types/IPostPage";
import PostDetails from "./components/PostDetails";
import RecommendedPosts from "./components/RecommendedPosts";
import { StyledPostPage } from "./styles";
import Head from "next/head";

const PostPage: FC<IPostPage.IProps> = ({ data }): ReactElement => {
  return (
    <>
      <Head>
        <title>{data.post?.title} | Efreshli Books</title>
      </Head>

      <StyledPostPage>
        <PostDetails post={data.post} />
        <RecommendedPosts posts={data.recommendedPosts} />
      </StyledPostPage>
    </>
  );
};

export default PostPage;
