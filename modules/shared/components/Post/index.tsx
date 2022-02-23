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
          <div className="image-wrapper">
            <Image
              src={post.image}
              alt={post.title}
              layout="responsive"
              objectFit="cover"
              width={40}
              height={25}
            />
          </div>

          <div className="content-wrapper">
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
