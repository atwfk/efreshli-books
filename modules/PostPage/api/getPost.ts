import { transformPostsData } from "./../../HomePage/api/getPosts";
import { IPostData } from "@modules/shared/types/IPostData";
import { formatToLocal } from "./../../shared/logic/formatDate";
import { getApi } from "./../../shared/api/network";
import { IError } from "@modules/shared/types/IError";
import { IGetPosts } from "@modules/HomePage/api/IGetPosts";

const transformPostData = (post: IGetPosts.IPostApi): IPostData.IPost => {
  return {
    id: post.id,
    title: post.text,
    body: post.text,
    publishDate: formatToLocal(post.publishDate),
    image: post.image,
    tags: post.tags,
  };
};

export const getPostById = async (
  postId: string,
): Promise<{ data: IPostData.IPost } | IError.IErrorData> => {
  return await getApi<
    IGetPosts.IPostApi,
    { data: IPostData.IPost },
    IError.IErrorData
  >(
    `/post/${postId}`,
    (response) => {
      const { data } = response;

      return { data: transformPostData(data) };
    },
    (err) => {
      const { message, errorCode, isError } = err;

      throw Object.assign(new Error(), { isError, message, errorCode });
    },
  );
};

export const getPostsByTag = async (
  tagName: string,
): Promise<{ data: IPostData.IPost[] } | IError.IErrorData> => {
  return await getApi<
    IGetPosts.IPostsResApi,
    { data: IPostData.IPost[] },
    IError.IErrorData
  >(
    `/tag/${tagName}/post`,
    (response) => {
      const { data } = response;

      return { data: transformPostsData(data.data).slice(0, 2) };
    },
    (err) => {
      const { message, errorCode, isError } = err;

      throw Object.assign(new Error(), { isError, message, errorCode });
    },
  );
};
