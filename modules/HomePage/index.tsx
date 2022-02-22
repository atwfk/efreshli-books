import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IHomePage } from "./types/IHomePage";
import Posts from "./components/Posts";
import { getPosts } from "./api/getPosts";
import { IError } from "@modules/shared/types/IError";
import LoadMore from "./components/LoadMore";

const HomePage: FC<IHomePage.IProps> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState(data.posts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const { data } = (await getPosts(page)) as IHomePage.IProps;

      setPage(page + 1);
      setPosts([...posts, ...data.posts]);
    } catch (error: unknown) {
      const { message, errorCode, isError } = error as IError.IErrorData;

      console.log({ message, errorCode, isError });
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

export default HomePage;
