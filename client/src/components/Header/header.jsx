import "./header.css";
import call from '../../assets/images/call-icon.png'
import mail from '../../assets/images/mail-icon.png'
import facebook from '../../assets/images/facebook.png'
import x from '../../assets/images/x.png'
import insta from '../../assets/images/insta.png'

const Navbar =(()=>{
  return(
    <>
         <div className="top-header">
              <div className="main-course-search">
                  <input placeholder="search for course"/>
              </div>
              <div className="top-head-contact">
                  <div className="mail-icon">
                      <img src={mail} alt="mail-icon"/>
                      <p>glredutech@gmail.com</p>

                  </div>
                  <div className="call-icon">
                      <img src={call} alt="call-icon"/>
                      <p>+91 987654321</p>
                  </div>
                  
              </div>
              <div className="top-head-sm">
                    <img src={facebook} alt="facebook"/>
                    <img src={x} alt="facebook"/>
                    <img src={insta} alt="facebook"/>
              </div>
         </div>
         <div className="header"> 



              
         </div>
    </>
  )
})
export default Navbar