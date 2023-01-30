import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor"

export const PostList = () => {
  const { posts } = useSelector((state) => state.post);
  return (
    <section>
      <h2>POSTS</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.author}</p>
        </article>
      ))}
    </section>
  );
};

export default PostList;
