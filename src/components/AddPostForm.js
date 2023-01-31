import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postSlice";
const initialState = {
  title: "",
  author: "",
  content: "",
};
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { users } = useSelector((state) => state.user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      id: nanoid(),
      [name]: value,
    });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventdefault();
    dispatch(addPost(formData));
    setFormData(initialState);
  };

  return (
    <div className="form-section">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          name="author"
          id="postAuthor"
          value={formData.author}
          onChange={handleChange}
        >
          <option value=""> --Select Author--</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postContent"> Content :</label>
        <textarea
          id="postContent"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={!formData.title || !formData.content}>
          Save Post
        </button>
      </form>
    </div>
  );

};

export default AddPostForm;
