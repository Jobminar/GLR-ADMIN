import React, { useEffect, useState } from "react";
import './careers.css'

const Careers = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch("https://glr-be-0izm.onrender.com/getcareer");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCareerData(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    fetchCareerData();
  }, []); 

  return (
    <div className="career-main-con">
      {careerData.map((item, index) => (
        <>
          <div className="career-con">
               <div className="one-row">
                 <p>Job-title<br/><span className="span-item">{item.jobTitle}</span></p>
                 <p className="Location">company<br/><span>{item.companyName}</span></p>
                 
               </div>
              <div className="two-row">
              <p className="companyname">Location<br/><span>{item.jobLocation}</span></p>
                <p className="salary">Salary:<br/><span>{item.salary}</span></p>
                <p className="experience">Experience: <br/><span>{item.experience}</span></p>
              </div>
              
              <div className="four-row">
                <p className="applicationDeadline">Application Deadline:<br/><span>{new Date(item.applicationDeadline).toLocaleDateString()}</span> </p>
                <p className="contactPerson">Contact Person:<br/><span>{item.contactPerson}</span> </p>
                <p className="contactMobile">Contact Mobile:<br/><span>{item.contactMobile}</span> </p>
              </div>
              <div className="three-row">
                <p className="skills">Skills<br/><span>{item.skills}</span></p>
                <p className="education">Education: <br/><span>{item.education}</span></p>
              </div>
              {/* <p className="applicationUrl">Application URL: <a href={item.applicationUrl}>{item.applicationUrl}</a></p> */}
              <button>Apply</button>

          </div>
          {/* <div className="career-sub-con" key={index}>
            {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                <strong>{key}: </strong>{value}
              </div>
            ))}
          </div> */}
        </>
        
      ))}
    </div>
  );
};

export default Careers;

