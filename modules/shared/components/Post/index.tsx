import React from "react";
import type { FC, ReactElement } from "react";
import Link from "next/link";
import { IPostData } from "@modules/shared/types/IPostData";
import Image from "next/image";
import { StyledPost } from "./styles";

const Post: FC<{ post: IPostData.IPost }> = ({ post }): ReactElement => {
  return (
    <StyledPost>
      <Link href={`/posts/${post.id}`}>
        <a>
          <Image
            src={post.image}
            alt={post.title}
            layout="responsive"
            objectFit="cover"
            width={80}
            height={40}
          />
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span>Published at: {post.publishDate}</span>
          </div>
        </a>
      </Link>
    </StyledPost>
  );
};

export default Post;
