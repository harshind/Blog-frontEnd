import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://obscure-fjord-59024.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return posts;
};

export default usePosts;
