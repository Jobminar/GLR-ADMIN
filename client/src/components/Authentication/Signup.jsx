import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "./signup.css";
import Swal from 'sweetalert2';
export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    dateOfBirth: '',
    qualification: '',
    branch: '',
    passedOutYear: '',
    deviceId: '', 
    privacyPolicy: false
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signup', formData);
      console.log(response.data);
      
      // Display success message
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'You have successfully signed up.',
      });

      // Redirect or do something else upon successful signup
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to success!',
        text: error,
      });
      console.error('Error signing up:', error);
    }
  };

  const handleLoginClick = () => {
    // Define the logic for handling login click
    navigate('/login'); // Example navigation to login page
  };




  return (
    <div className="signup-con">
      <div className="col-md-12 text-center p-4" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div className="text-center mb-4">
          <h2 className="h3 mb-3 font-weight-bold" style={{ fontFamily: "Saira", color: "red" }}>Create an account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              name='name'
              type="text"
              id="Name"
              className="form-control"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='email'
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='password'
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='mobile'
              type="tel"
              id="mobile"
              className="form-control"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='dateOfBirth'
              type="date"
              id="dateOfBirth"
              className="form-control"
              placeholder="Date of Birth"
              required
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='qualification'
              type="text"
              id="qualification"
              className="form-control"
              placeholder="Qualification"
              required
              value={formData.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='branch'
              type="text"
              id="branch"
              className="form-control"
              placeholder="Branch"
              required
              value={formData.branch}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='passedOutYear'
              type="text"
              id="passedOutYear"
              className="form-control"
              placeholder="Passed Out Year"
              required
              value={formData.passedOutYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              name='deviceId'
              type="text"
              id="deviceId"
              className="form-control"
              placeholder="Device ID"
              required
              value={formData.deviceId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="form-check-input"
              required
              checked={formData.privacyPolicy}
              onChange={() => setFormData({ ...formData, privacyPolicy: !formData.privacyPolicy })}
            />
            <label htmlFor="privacyPolicy" className="form-check-label">
              I agree to the privacy policy
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-danger btn-block mx-auto mt-2"
            style={{ width: "200px", fontFamily: "Saira" }}
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-2">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={handleLoginClick}
              style={{ fontFamily: "Saira", cursor: "pointer" }}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
