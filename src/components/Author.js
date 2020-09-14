import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Post from "../components/Post";
import { Button } from "reactstrap";

const Author = () => {
  const [authorPost, setAuthor] = useState({});

  const { params } = useRouteMatch();
  const { goBack } = useHistory();

  useEffect(() => {
    fetch(`https://obscure-fjord-59024.herokuapp.com/authors/${params.authorId}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.authorPost);
      });
  }, [params]);

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <Post
        id={authorPost._id}
        author={authorPost.author?.name}
        title={authorPost.title}
        content={authorPost.content}
      />
    </>
  );
};

export default Author;
