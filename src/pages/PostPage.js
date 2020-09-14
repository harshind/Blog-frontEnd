import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Post from "../components/Post";
import { Button } from "reactstrap";

const PostPage = () => {
  const [post, setPost] = useState({});

  const { params } = useRouteMatch();
  const { goBack } = useHistory();

  useEffect(() => {
    fetch(`https://x9q94.sse.codesandbox.io/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.post));
  }, [params]);

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <Post
        id={post._id}
        author={post.author?.name}
        title={post.title}
        content={post.content}
      />
    </>
  );
};

export default PostPage;
