declare namespace IGetPosts {
  export interface IPostApi {
    id: string;
    image: string;
    text: string;
    publishDate: Date;
  }

  export interface IPostsResApi {
    data: IPostApi[];
    total: number;
  }
}

export { IGetPosts };
