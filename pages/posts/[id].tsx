import { getPosts } from "@modules/HomePage/api/getPosts";
import { IHomePage } from "@modules/HomePage/types/IHomePage";
import PostPage from "@modules/PostPage";
import { getPostById, getPostsByTag } from "@modules/PostPage/api/getPost";
import { IPostPage } from "@modules/PostPage/types/IPostPage";
import { IError } from "@modules/shared/types/IError";
import { IPostData } from "@modules/shared/types/IPostData";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

const Post: NextPage<IPostPage.IProps> = ({ data }) => {
  return <PostPage data={data} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  let data = {};
  let tagName = "";

  try {
    const { data: post } = (await getPostById(id)) as {
      data: IPostData.IPost;
    };

    tagName = post.tags[0];

    data = { ...data, post };
  } catch (error: unknown) {
    const { message, errorCode, isError } = error as IError.IErrorData;
    data = { ...data, post: { message, errorCode, isError } };
  }

  try {
    const { data: posts } = (await getPostsByTag(tagName)) as {
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
  try {
    const { data } = (await getPosts(0, 50)) as IHomePage.IProps;

    const paths = data.posts.map((post) => ({ params: { id: post.id } }));

    return {
      paths: paths,
      fallback: "blocking",
    };
  } catch (error: unknown) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export default Post;
