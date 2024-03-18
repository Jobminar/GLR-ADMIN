import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Aboutus from "./Aboutus/aboutus";
import Courses from "./Courses/courses";
import Careers from "./Careers/careers";
import Contactus from "./Contactus/contactus";
import Blogs from "./Blogs/blogs";
import Signup from "./Authentication/Signup";
import Navbar from "./Header/header";
import LoginForm from "./Authentication/signin";
import OTP from "./Authentication/otp";
import Adminnavbar from "./Admin/Adminheader/adminheader";
import Courseupload from "./Admin/Courseupload/courseupload";
import Blogsupload from "./Admin/Blogsupload/blogsupload";
import Careersupload from "./Admin/Careesupload/careersupload";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar>
                <Home />
              </Navbar>
            }
          />
          <Route
            path="/Aboutus"
            element={
              <Navbar>
                <Aboutus />
              </Navbar>
            }
          />
          <Route
            path="/Courses"
            element={
              <Navbar>
                <Courses />
              </Navbar>
            }
          />
          <Route
            path="/Careers"
            element={
              <Navbar>
                <Careers />
              </Navbar>
            }
          />
          <Route
            path="/Contactus"
            element={
              <Navbar>
                <Contactus />
              </Navbar>
            }
          />
          <Route
            path="/Blogs"
            element={
              <Navbar>
                <Blogs />
              </Navbar>
            }
          />
          <Route
            path="/Signup"
            element={
              <Navbar>
                <Signup />
              </Navbar>
            }
          />
          <Route
            path="/signin"
            element={
              <Navbar>
                <LoginForm />
              </Navbar>
            }
          />
          <Route
            path="/otp"
            element={
              <Navbar>
                <OTP />
              </Navbar>
            }
          />
  

          // Admin routing

          <Route
          path="/adminnavbar"
          element={
              <Adminnavbar />
          }
        />
          
        <Route
          path="/Courseupload"
          element={
             <Adminnavbar>
             <Courseupload />
             </Adminnavbar>
            
          }
        />
        <Route
          path="/Blogsupload"
          element={
              <Adminnavbar>
              <Blogsupload />
              </Adminnavbar>
              
          }
        />
        <Route
          path="/Careersupload"
          element={
            <Adminnavbar>
            <Careersupload />
            </Adminnavbar>
              
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
