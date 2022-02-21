import { formatToLocal } from "./../../shared/logic/formatDate";
import { getApi } from "./../../shared/api/network";
import { IError } from "@modules/shared/types/IError";
import { IPostData } from "@modules/shared/types/IPostData";
import { IGetPosts } from "./IGetPosts";

const transformPostsData = (posts: IGetPosts.IPostApi[]): IPostData.IPost[] => {
  return posts.map((post) => ({
    id: post.id,
    title: post.text,
    body: post.text,
    publishDate: formatToLocal(post.publishDate),
  }));
};

export const getPosts = async (
  page: number,
): Promise<IPostData.IPost[] | IError.IErrorData> => {
  return await getApi<
    IGetPosts.IPostsResApi,
    IPostData.IPost[],
    IError.IErrorData
  >(
    `/post?page=${page}&limit=8`,
    (response) => {
      const { data } = response;

      return transformPostsData(data.data);
    },
    (err) => {
      const { message, errorCode, isError } = err;

      throw Object.assign(new Error(), { isError, message, errorCode });
    },
  );
};
