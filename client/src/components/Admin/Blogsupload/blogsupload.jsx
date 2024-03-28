import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Blogsupload = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    publicationDate: '',
    category: '',
    keywords: '',
    image: null,
    description: '',
    publishOptions: '',
    visibility: '',
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
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Title"
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={blogData.author}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Author"
          required
        />
      </div>

      <div>
        <label htmlFor="publicationDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication Date</label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          value={blogData.publicationDate}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={blogData.category}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Category"
          required
        />
      </div>

      <div>
        <label htmlFor="keywords" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keywords</label>
        <input
          type="text"
          id="keywords"
          name="keywords"
          value={blogData.keywords}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Keywords"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea
          id="description"
          name="description"
          value={blogData.description}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Description"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="publishOptions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publish Options</label>
        <input
          type="text"
          id="publishOptions"
          name="publishOptions"
          value={blogData.publishOptions}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Publish Options"
          required
        />
      </div>

      <div>
        <label htmlFor="visibility" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visibility</label>
        <input
          type="text"
          id="visibility"
          name="visibility"
          value={blogData.visibility}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Visibility"
          required
        />
      </div>

      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
  );
};

export default Blogsupload;
