import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";
import useHover from "../hooks/useHover";
const Home = () => {
  const posts = usePosts();
  const isHovered = useHover("#title");
  return (
    <div>
      <h1 style={{ color: isHovered ? "red" : "black" }} id="title">
        Welcome to my blog!!
      </h1>
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            id={post._id}
            title={post.title}
            author={post.author.name}
            content={post.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

export default Home;
