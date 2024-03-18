import React, { useState } from 'react';
import axios from 'axios';

const CourseUpload = () => {
  const [formData, setFormData] = useState({
    courseCode: '',
    title: '',
    description: '',
    price: '',
    instructor: '',
    duration: '',
    file: '',
    topics: '',
    prerequisites: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await axios.post('https://glr-be.onrender.com/course', formData);
      if (response.ok) {
        alert('Course submitted successfully');
        // setFormData({
        //   courseCode: '',
        //   title: '',
        //   description: '',
        //   price: '',
        //   instructor: '',
        //   duration: '',
        //   file: '',
        //   topics: [],
        //   prerequisites: []
        // });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ width: '70%', border: '1px solid black', margin: '2rem auto', padding: '2rem' }}>
      
        {/* Course Code */}
        <div>
          <label htmlFor="courseCode" className="block mb-2 text-sm font-medium text-gray-900">Course Code</label>
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
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
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
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
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
          <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">File</label>
          <input
            type="file"
            id="file"
            name="file"
            value={formData.file}
            onChange={handleChange}
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Submit</button>
    
    </div>
  );
};

export default CourseUpload;
