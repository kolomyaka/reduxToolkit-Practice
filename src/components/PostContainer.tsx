import React, { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import "./post.scss";

type Props = {};

const PostContainer = (props: Props) => {
  const [ limit, setLimit ] = useState(10);
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 10000000  // Отправляем запрос на сервер в указаном интервале
  });

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3)
    // }, 2000)
  }, [])
  

  return (
    <div className="post__container">
      {isLoading && <h1 className="title">Идет загрузка...</h1>}
      {error && <h1 className="title">Ошибка:{error}</h1>}
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default PostContainer;
