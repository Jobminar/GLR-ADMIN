import React, { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  // State to store input values
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    publicationDate: "",
    category: "",
    keywords: "",
    description: "",
    publishOptions: "",
    visibility: "",
    image: null,
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handling file separately because it's not a string value
    if (name === "image") {
      setBlogData({ ...blogData, image: e.target.files[0] });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in blogData) {
      formData.append(key, blogData[key]);
    }

    try {
      await axios.post("https://glr-be.onrender.com/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Blog posted successfully!");
      // Clear form / handle success
    } catch (error) {
      console.error("Failed to post blog:", error);
      alert("Failed to post blog.");
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={blogData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={blogData.author}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="publicationDate"
        value={blogData.publicationDate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={blogData.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="keywords"
        placeholder="Keywords"
        value={blogData.keywords}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={blogData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="publishOptions"
        placeholder="Publish Options"
        value={blogData.publishOptions}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="visibility"
        placeholder="Visibility"
        value={blogData.visibility}
        onChange={handleChange}
        required
      />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Post Blog</button>
    </form>
  );
};

export default CreateBlog;
