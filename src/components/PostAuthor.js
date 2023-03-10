import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const { users } = useSelector((state) => state.user);
  const author = users.find((user) => user.id === userId);

  return (
    <div>
      by <strong>{author ? author.name : "unknown author"}</strong>
    </div>
  );
};

export default PostAuthor;
