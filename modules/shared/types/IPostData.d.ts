declare namespace IPostData {
  export interface IPost {
    id: string;
    image: string;
    title: string;
    body: string;
    publishDate: string;
    tags: string[];
  }
}

export { IPostData };
