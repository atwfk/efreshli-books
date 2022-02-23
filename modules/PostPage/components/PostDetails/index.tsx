import React from "react";
import type { FC, ReactElement } from "react";
import { IPostData } from "@modules/shared/types/IPostData";
import Image from "next/image";
import { StyledPost } from "./styles";
import withErrorHandler from "@modules/shared/HOC/withErrorHandler";

const PostDetails: FC<{ post: IPostData.IPost }> = ({ post }): ReactElement => {
  return (
    <StyledPost>
      <h1>{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        layout="responsive"
        objectFit="cover"
        width={500}
        height={200}
      />
      <p>{post.body}</p>
    </StyledPost>
  );
};

export default withErrorHandler(PostDetails, "post");
