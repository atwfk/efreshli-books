import { formatToLocal } from "./../../shared/logic/formatDate";
import { getApi } from "./../../shared/api/network";
import { IError } from "@modules/shared/types/IError";
import { IPostData } from "@modules/shared/types/IPostData";
import { IGetPosts } from "./IGetPosts";
import { IHomePage } from "../types/IHomePage";

export const transformPostsData = (
  posts: IGetPosts.IPostApi[],
): IPostData.IPost[] => {
  return posts.map((post) => ({
    id: post.id,
    title: post.text,
    body: post.text,
    publishDate: formatToLocal(post.publishDate),
    image: post.image,
    tags: post.tags,
  }));
};

export const getPosts = async (
  page: number,
  limit: number,
): Promise<IHomePage.IProps | IError.IErrorData> => {
  return await getApi<
    IGetPosts.IPostsResApi,
    IHomePage.IProps,
    IError.IErrorData
  >(
    `/post?page=${page}&limit=${limit}`,
    (response) => {
      const { data } = response;

      return {
        data: { posts: transformPostsData(data.data), totalPosts: data.total },
      };
    },
    (err) => {
      const { message, errorCode, isError } = err;

      throw Object.assign(new Error(), { isError, message, errorCode });
    },
  );
};
