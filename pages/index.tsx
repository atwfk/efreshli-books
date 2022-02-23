import HomePage from "@modules/HomePage";
import { getPosts } from "@modules/HomePage/api/getPosts";
import { IHomePage } from "@modules/HomePage/types/IHomePage";
import { POSTS_LIMIT } from "@modules/shared/constants";
import { IError } from "@modules/shared/types/IError";
import type { NextPage, GetStaticProps } from "next";

const Home: NextPage<IHomePage.IProps> = ({ data }) => {
  return <HomePage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = (await getPosts(0, POSTS_LIMIT)) as IHomePage.IProps;

    return {
      props: { data: { posts: data.posts, totalPosts: data.totalPosts } },
      revalidate: 60,
    };
  } catch (error: unknown) {
    const { message, errorCode, isError } = error as IError.IErrorData;

    return { props: { data: { message, errorCode, isError } } };
  }
};

export default Home;
