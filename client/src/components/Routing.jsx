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
import Blogpreview from "./Blogs/blogpreview";
import Student from "./Contactus/Student";
import GetContact from "./Contactus/GetContact";
import CourseExplore from "./Courses/courseExplore";
import Footer from "./Footer/footer";
import GLRAdminForm from "./Authentication/GLRAdminForm";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/blogview" element={<Blogpreview />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/getcontact" element={<GetContact />} />
          <Route path="/courseexplore" element={<CourseExplore />} />
          {/* <Route path="/student" element={<Student />} /> */}
          {/* <Route path="/getstudent" element={<GetStudent />} /> */}
          {/* Admin routing */}
          <Route path="/adminnavbar" element={<Adminnavbar />} />
          {/*this is  Admin form routing */}
          <Route path="/glradmin" element={<GLRAdminForm />} />
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
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Routing;
