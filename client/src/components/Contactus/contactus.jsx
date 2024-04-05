import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import swal from 'sweetalert2';
import './contact.css';

const ContactUs = () => {
  // State to manage form data and error message
  const [formData, setFormData] = useState({ name: '', email: '', phoneNo: '', message: '' });
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to handle changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(null);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user is authenticated
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Unauthorized: You must be logged in to create contacts');
      }

      // Send a POST request to the server with form data
      const response = await axios.post('http://localhost:4000/postcontact', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
      });

      // Reset form data after successful submission
      setFormData({ name: '', email: '', phoneNo: '', message: '' });
      
      // Show success message to the user
      swal.fire("Success", "Contact details submitted successfully!", "success");
    } catch (error) {
      // Handle errors and display user-friendly error message
      setErrorMessage(error.response?.data?.message || error.message);
    }
  };

  // JSX to render the contact form
  return (
    <div className='contact-main'>
      <div><h2>Contact us page</h2></div>
      <div className='contact-textfield'>
        <TextField id="outlined-basic" label="Name" name='name' value={formData.name} onChange={handleChange} />
        <TextField id="outlined-basic" label="Email" name='email' value={formData.email} onChange={handleChange} />
        <TextField id="outlined-basic" label="Phone No" name='phoneNo' value={formData.phoneNo} onChange={handleChange} />
        <TextField id="outlined-basic" label="Message" name='message' value={formData.message} onChange={handleChange} />
        <button className='contact-button' onClick={handleSubmit}>Submit Details</button>
      </div>
      {/* Display error message if any */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default ContactUs;


// import React, { useState } from 'react';
// import axios from 'axios';


// const Students = () => {
//   const [formData, setFormData] = useState({ name: '', age: '', grade: '' });
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrorMessage(null); // Clear error message on input change
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const token = localStorage.getItem('authToken');
//       console.log(token,'tokennn')
//       if (!token) {
//         throw new Error('Unauthorized: You must be logged in to create students');
//       }

//       const response = await axios.post('http://localhost:4000/students', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
      
  
//       console.log('Student created:', response.data);
//       setFormData({ name: '', age: '', grade: '' }); // Clear form after success
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || error.message); // Display user-friendly error message
//     }
//   }
  
  

//   return (
//     <div>
    
//       <h2>Post Student</h2>
//       <form onSubmit={handleSubmit}>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="grade">Grade:</label>
//           <input
//             type="text"
//             name="grade"
//             id="grade"
//             value={formData.grade}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Students
