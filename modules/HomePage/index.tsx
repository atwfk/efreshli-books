import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IHomePage } from "./types/IHomePage";
import Posts from "./components/Posts/Posts";

const HomePage: FC<IHomePage.IProps> = ({ data }): ReactElement => {
  const [posts] = useState(data.posts);
  return <Posts posts={posts} />;
};

export default HomePage;
