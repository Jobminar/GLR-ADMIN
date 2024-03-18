import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Careersupload = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    postName: '',
    description: '',
    link: '',
    uploadDate: new Date().toISOString().split('T')[0] ,
    validDate: ''
  });
  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData)
      // Send form data to the API
      const response = await axios.post('https://glr-be.onrender.com/postcareer', formData);
      if(response.ok){
        alert('submitted')
      }
      console.log('Response:', response.data); // Log the response from the API
      // Clear the form after successful submission if needed
    //   setFormData({
    //     postName: '',
    //     description: '',
    //     link: '',
    //     uploadDate: '',
    //     validDate: ''
    //   });
    } catch (error) {
      console.error('Error:', error); // Log any errors that occur during the request
    }
  };

  return (
    <div style={{ width: '70%', border: '1px solid black', margin: '2rem auto', padding: '2rem', display: 'flex', flexDirection: "column", gap: '2rem' }}>
        <div>
          <label htmlFor="post_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post name</label>
          <input
            type="text"
            id="post_name"
            name="postName"
            value={formData.postName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Post name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Place link of your tutorial"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* Your SVG icon */}
          </div>
          <input
            name="validDate"
            type="date"
            value={formData.validDate}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>

        <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    
    </div>
  );
};

export default Careersupload;
