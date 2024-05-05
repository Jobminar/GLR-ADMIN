import React from 'react';
import "./header.css";
import logo from '../../assets/images/logo.jpeg';
import call from '../../assets/images/call-icon.png';
import mail from '../../assets/images/mail-icon.png';
import facebook from '../../assets/images/facebook.png';
import x from '../../assets/images/x.png';
import insta from '../../assets/images/insta.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-header">
        <div className="main-course-search">
          <input placeholder="search for course" />
        </div>
        <div className="top-head-contact">
          <div className="mail-icon">
            <img src={mail} alt="mail-icon" />
            <p>glredutech@gmail.com</p>
          </div>
          <div className="call-icon">
            <img src={call} alt="call-icon" />
            <p>+91 987654321</p>
          </div>
        </div>
        <div className="top-head-sm">
          <img src={facebook} alt="facebook" />
          <img src={x} alt="facebook" />
          <img src={insta} alt="facebook" />
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <p onClick={() => navigate('/')}>Home</p>
          <p onClick={() => navigate('/Aboutus')}>About us</p>
          <p onClick={() => navigate('/Courses')}>Courses</p>
          <p onClick={() => navigate('/Careers')}>Careers</p>
          <p onClick={() => navigate('/Contactus')}>Contact us</p>
          <p onClick={() => navigate('/Blogs')}>Blog</p>
        </div>
        <div className="login-button">
          <button>Login / Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
