import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const CareersUpload = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    jobTitle :'',
    companyName:'',
    jobLocation:'',
    jobType:'',
    jobCategory:'',
    jobDescription:'',
    skills:'',
    experience:'',
    education:'',
    salary:'',
    applicationDeadline:'',
    applicationUrl:'',
    contactPerson:'',
    contactMobile:'',
    careerImage:null,
    additionalField:''
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
      console.log(formData);
      // Send form data to the API
      const response = await axios.post('https://glr-be.onrender.com/postcareer', formData);
      if(response.ok){
        alert('Submitted');
      }
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error); // Log any errors that occur during the request
    }
  };

  return (
    <div style={{ width: '70%', border: '1px solid black', margin: '2rem auto', padding: '2rem', display: 'flex', flexDirection: "column", gap: '2rem' }}>
    <div>
      <label htmlFor="job_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
      <input
        type="text"
        id="job_title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Job Title"
        required
      />
    </div>
    <div>
      <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
      <input
        type="text"
        id="company_name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Company Name"
        required
      />
    </div>
    <div>
      <label htmlFor="job_location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Location</label>
      <input
        type="text"
        id="job_location"
        name="jobLocation"
        value={formData.jobLocation}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Job Location"
        required
      />
    </div>
    <div>
      <label htmlFor="jobType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Type</label>
      <select
        id="jobType"
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      >
        <option value="">Select Job Type</option>
        <option value="parttime">Part-time</option>
        <option value="fulltime">Full-time</option>
        <option value="freelancing">Freelancing</option>
        <option value="contract">Contract</option>
      </select>
    </div>

    {/* category */}
    <div>
      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
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

    <div>
      <label htmlFor="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
      <input
        type="text"
        id="job_description"
        name="jobDescription"
        value={formData.jobDescription}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Job Description"
        required
      />
    </div>
    
    <div>
      <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Skills"
        required
      />
    </div>
    <div>
      <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
      <input
        type="text"
        id="experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Experience"
        required
      />
    </div>
    <div>
      <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
      <input
        type="text"
        id="education"
        name="education"
        value={formData.education}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Education"
        required
      />
    </div>
    <div>
      <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
      <input
        type="text"
        id="salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Salary"
        required
      />
    </div>
    <div>
      <label htmlFor="application_dead" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Deadline</label>
      <input
        type="date"
        id="application_dead"
        name="applicationDeadline"
        value={formData.applicationDeadline}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Application Deadline"
        required
      />
    </div>
    <div>
      <label htmlFor="application_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application URL</label>
      <input
        type="text"
        id="application_url"
        name="applicationUrl"
        value={formData.applicationUrl}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Application URL"
        required
      />
    </div>
    <div>
      <label htmlFor="contact_person" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Person</label>
      <input
        type="text"
        id="contact_person"
        name="contactPerson"
        value={formData.contactPerson}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Contact Person"
        required
      />
    </div>
    <div>
      <label htmlFor="contact_mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Mobile</label>
      <input
        type="text"
        id="contact_mobile"
        name="contactMobile"
        value={formData.contactMobile}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Contact Mobile"
        required
      />
    </div>
    <div>
      <label htmlFor="career_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Career Image</label>
      <input
        type="file"
        id="career_image"
        name="careerImage"
        value={formData.careerImage}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Career Image URL"
        required
      />
    </div>
    <div>
      <label htmlFor="additional_field" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Field</label>
      <input
        type="text"
        id="additional_field"
        name="additionalField"
        value={formData.additionalField}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Additional Field"
        required
      />
    </div>
        
        <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    
    </div>
  );
};

export default CareersUpload;
