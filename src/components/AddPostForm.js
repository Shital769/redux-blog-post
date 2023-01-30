import React, { useReducer } from "react";
import { useState } from "react";
import {userReducer} from "../redux/userSlice.js"
const initialState = {
  title: "",
  author: "",
  content: "",
};
const AddPostForm = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <div className="form-section">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="postAuthor">Author</label>
        <select
          name="author"
          id="postAuthor"
          onChange={handleChange}
          value={formData.author}
        >
          <option value=""> --Select Author--</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postCOntent"> Content :</label>
        <textarea
          id="postContent"
          name="Content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Save Post</button>
      </form>
    </div>
  );

  <button type="submit">Save Post</button>;
};

export default AddPostForm;
