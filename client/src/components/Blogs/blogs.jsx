import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './blogs.css'

const Blogs = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://glr-be.onrender.com/getblogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      console.log(data)
      setBlogData(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Handle error gracefully, e.g., display a message to the user
    }
  };

  const [selectedblog, setSelectedblog] = useState('');
  
  const handleProduct = (item) => {
    setSelectedblog(item);
    navigate('/blogview', { state: { selectedblog: item } });
    console.log(item,'data')
  };

  return (
    <>
      <div className="blogs-con">
        <div className="side-head-blogs">
          <h1>BLOGS</h1>
        </div>
        <p>Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!</p>
        <div className="blog-container">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-item">
              <img src={`data:image/jpeg;base64,${blog.blogImage}`} alt={`Blog ${index + 1}`} onClick={() => handleProduct(blog)} />

              <div className="relative-content">
                <h2>{blog.blogName}</h2>
                {/* Render additional blog information here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
