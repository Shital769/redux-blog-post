import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";

export const PostList = () => {
  const { posts } = useSelector((state) => state.post);
  return (
    <section className="post-list">
      <h2>POSTS</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div>
            <PostAuthor userId={post.author} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default PostList;
