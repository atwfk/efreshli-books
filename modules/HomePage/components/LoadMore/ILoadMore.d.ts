declare namespace ILoadMore {
  export interface IProps {
    loading: boolean;
    clicked: () => void;
    totalPosts: number;
    page: number;
  }
}

export { ILoadMore };
