import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IHomePage } from "./types/IHomePage";
import Posts from "./components/Posts";
import { getPosts } from "./api/getPosts";
import { IError } from "@modules/shared/types/IError";
import LoadMore from "./components/LoadMore";
import { POSTS_LIMIT } from "@modules/shared/constants";
import withErrorHandler from "@modules/shared/HOC/withErrorHandler";
import { toast } from "react-toastify";

const HomePage: FC<IHomePage.IProps> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState(data.posts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const { data } = (await getPosts(page, POSTS_LIMIT)) as IHomePage.IProps;

      setPage(page + 1);
      setPosts([...posts, ...data.posts]);
    } catch (error: unknown) {
      const { message } = error as IError.IErrorData;

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Posts posts={posts} />
      <LoadMore
        clicked={getMorePosts}
        loading={loading}
        page={page}
        totalPosts={data.totalPosts}
      />
    </section>
  );
};

export default withErrorHandler(HomePage, "data");
