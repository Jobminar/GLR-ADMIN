import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Blogsupload = () => {
  const [blogData, setBlogData] = useState({
    blogName: '',
    blogImage: null,
    blogDescription: '',
    uploadDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    if (e.target.name === 'blogImage') {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.files[0]
        });
    } else {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('blogName', blogData.blogName);
        formData.append('blogImage', blogData.blogImage);
        formData.append('blogDescription', blogData.blogDescription);
        formData.append('uploadDate', blogData.uploadDate);

        const response = await axios.post('https://glr-be.onrender.com/postblogs', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Blog added:', response.data);
        // Optionally, you can handle success, for example, show a success message or redirect to another page
    } catch (error) {
        console.error('Error uploading blog:', error);
        // Optionally, you can handle errors, for example, show an error message
    }
  };

  return (
    <div style={{ width: '70%', border: '1px solid black', margin: '2rem auto', padding: '2rem', display: 'flex', flexDirection: "column", gap: '2rem' }}>
      <div>
        <label htmlFor="blog_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog name</label>
        <input
          type="text"
          id="blog_name"
          name="blogName"
          value={blogData.blogName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Blog name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="blog_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog image</label>
        <input
          type="file"
          id="blog_image"
          name="blogImage"
          onChange={handleChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="blog_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea
          id="blog_description"
          name="blogDescription"
          value={blogData.blogDescription}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Blog description"
          required
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
  );
};

export default Blogsupload;
