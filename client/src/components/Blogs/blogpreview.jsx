import React, { useEffect, useState } from "react";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blogs from your backend
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://glr-be.onrender.com/blog");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {blogs.map((blog, index) => (
        <div
          key={index}
          style={{
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3>{blog.title}</h3>
          <p>
            {blog.author} -{" "}
            {new Date(blog.publicationDate).toLocaleDateString()}
          </p>
          <p>Category: {blog.category}</p>
          {blog.keywords && <p>Keywords: {blog.keywords}</p>}
          <p>{blog.description}</p>
          <p>Publish Options: {blog.publishOptions}</p>
          <p>Visibility: {blog.visibility}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
