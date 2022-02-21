import HomePage from "@modules/HomePage";
import { getPosts } from "@modules/HomePage/api/getPosts";
import { IHomePage } from "@modules/HomePage/types/IHomePage";
import { IError } from "@modules/shared/types/IError";
import type { NextPage, GetStaticProps } from "next";

const Home: NextPage<IHomePage.IProps> = ({ data }) => {
  console.log(data);
  return <HomePage />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPosts(0);

    return { props: { data: posts }, revalidate: 60 };
  } catch (error: unknown) {
    const { message, errorCode, isError } = error as IError.IErrorData;

    return { props: { data: { message, errorCode, isError } } };
  }
};

export default Home;
