import PostPage from "@modules/PostPage";
import { getPostById, getPostsByTag } from "@modules/PostPage/api/getPost";
import { IError } from "@modules/shared/types/IError";
import { IPostData } from "@modules/shared/types/IPostData";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

const Post: NextPage = () => {
  //   console.log(data);
  return <PostPage />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  let data = {};

  try {
    const { data: post } = (await getPostById(id)) as {
      data: IPostData.IPost;
    };
    data = { ...data, post };
  } catch (error: unknown) {
    const { message, errorCode, isError } = error as IError.IErrorData;
    data = { ...data, post: { message, errorCode, isError } };
  }

  try {
    const { data: posts } = (await getPostsByTag("dog")) as {
      data: IPostData.IPost[];
    };
    data = { ...data, recommendedPosts: posts };
  } catch (error: unknown) {
    const { message, errorCode, isError } = error as IError.IErrorData;
    data = { ...data, recommendedPosts: { message, errorCode, isError } };
  }

  return {
    props: { data },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "60d21bad67d0d8992e610daf" } }],
    fallback: "blocking",
  };
};

export default Post;
