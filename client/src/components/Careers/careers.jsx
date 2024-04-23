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
        <div key={index} className="career-con">
            <div className='career-image'>
              <img
                src={`data:image/png;base64, ${item.careerImage}`}
                alt={`Item ${item.jobTitle}`}
              />
            </div>
          <h3>{item.companyName} is Hiring : {item.jobTitle} ({item.experience})</h3>
        
          <p className="deadline">
              {new Date(item.applicationDeadline).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
        
          <p>{item.jobDescription.substring(0, 100)}</p>
          <p className="readmore">Read more</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;
