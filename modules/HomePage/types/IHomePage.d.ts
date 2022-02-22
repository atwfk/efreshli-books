import { IPostData } from "@modules/shared/types/IPostData";

declare namespace IHomePage {
  export interface IProps {
    data: {
      posts: IPostData.IPost[];
      totalPosts: number;
    };
  }
}

export { IHomePage };
