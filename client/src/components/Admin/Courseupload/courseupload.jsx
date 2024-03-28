import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const CourseUpload = () => {
  const [formData, setFormData] = useState({
    courseCode: '',
    title: '',
    description: '',
    category:'',
    price: '',
    instructor: '',
    duration: '',
    courseImage: null,
    topics: '',
    prerequisites:'',
    publishingOptions: '',
    keywords:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name , value)
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData({
      ...formData,
      courseImage: file
    });
  };

    useEffect(()=>{
        console.log(formData)
      },[formData])

  const handleSubmit = async () => {
    const data = new FormData();
  
    // Append all form fields to the FormData instance
    Object.entries(formData).forEach(([key, value]) => {
      // If it's a file (courseImage), append it directly
      if (key === 'courseImage') {
        data.append(key, value);
      } else {
        data.append(key, value);
      }
    });
  
    try {
      const response = await axios.post('https://glr-be.onrender.com/postcourse', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        alert('Course submitted successfully');
        // Reset form data here...
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
    console.log(data)
  };
  

  return (
    <div
      style={{
        width: "70%",
        margin: "1rem auto",
        padding: "0rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Course Code */}
      <div>
        <label
          htmlFor="courseCode"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Course Code
        </label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          value={formData.courseCode}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        >
          <option value="">Select a category</option>
          <option value="programming">Programming</option>
          <option value="marketing">Marketing</option>
          <option value="finance">Finance</option>
        </select>
      </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        {/* Instructor */}
        <div>
          <label htmlFor="instructor" className="block mb-2 text-sm font-medium text-gray-900">Instructor</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        {/* File */}
        <div>
          <label htmlFor="courseImage" className="block mb-2 text-sm font-medium text-gray-900">File</label>
          <input
            type="file"
            id="courseImage"
            name="courseImage"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        {/* Topics */}
        <div>
          <label htmlFor="topics" className="block mb-2 text-sm font-medium text-gray-900">Topics</label>
          <input
            type="text"
            id="topics"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        {/* Prerequisites */}
        <div>
          <label htmlFor="prerequisites" className="block mb-2 text-sm font-medium text-gray-900">Prerequisites</label>
          <input
            type="text"
            id="prerequisites"
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>

      {/* publishing options */}
      <div>
        <label
          htmlFor="publishingOptions"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Publishing options
        </label>
        <select
          id="publishingOptions"
          name="publishingOptions"
          value={formData.publishingOptions}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        >
          <option value="">Select an option</option>
          <option value="publish">Publish</option>
          <option value="saveForLater">Save for Later</option>
        </select>
      </div>

      {/* keywords */}
      <div>
        <label
          htmlFor="keywords"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Keywords
        </label>
        <input
          type="text"
          id="keywords"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default CourseUpload;
