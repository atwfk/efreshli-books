import { IPostData } from "@modules/shared/types/IPostData";
declare namespace IPostPage {
  export interface IProps {
    data: {
      post: IPostData.IPost;
      recommendedPosts: IPostData.IPost[];
    };
  }
}

export { IPostPage };
